import React, { Component } from "react"
import MapsApi from '../../../api/MapsApi'
import Geocoder from 'react-native-geocoding'
import { compose } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
    
    const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {
      
      return (
        <GoogleMap defaultZoom={5} defaultCenter={{ lat: 36.778259, lng: -119.417931 }}>
          {props.markers.map(marker => {
            const onClick = props.onClick.bind(this, marker)
            return (
              <Marker
                onClick={onClick}
                position={marker[0].location}
              >
                {props.selectedMarker === marker &&
                  <InfoWindow>
                    <div>
                    <p>{marker[0].Name}</p>
                    <p>{marker[0].FullAddress}</p>
                    <p>{marker[0].Website}</p>
                    <p>{"Contact: "+marker[0].ContactPerson}</p>
                    <p>{"Phone: "+marker[0].PhoneNumber}</p>
                    <p>{"Email: "+marker[0].Email}</p>
                    </div>
                  </InfoWindow>}
              </Marker>
            )
          })};
        </GoogleMap>
      )
    })
    
    export default class LawSchoolMap extends Component {
      //constructor 
      constructor(props) {
        super(props)
        this.state = {
          data: [],
          results: [],
          markers: [],
          search: "",
          selectedMarker: false
        };
        this.geoLocate = this.geoLocate.bind(this)
        this.LawSchoolSuccess = this.LawSchoolSuccess.bind(this);
        this.lawClinic = this.lawClinic.bind(this);
        this.lawSchool = this.lawSchool.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };
    
    //didMount
    componentDidMount() {
        MapsApi.LawSchoolGetAll(this.LawSchoolSuccess, this.error);   
    };
    
    //success
    LawSchoolSuccess(response) {
        this.setState({
            ...this.state,
            data: response.data.items,
        },  this.geoLocate);
    };
    
    //error
    error(response) {
        console.log(response);
        console.log('error');
    };
    
    //breakdown for geocoder
    geoLocate(){
        console.log(this.state.data)          
        for (var i = 0; i < this.state.data.length; i++) {

            var AddressLine1 = this.state.data[i].addressLine1
            var AddressLine2 = this.state.data[i].addressLine2
            var City = this.state.data[i].city
            var State = this.state.data[i].state
            var Zip = this.state.data[i].zip
            var PhoneNumber = this.state.data[i].phoneNumber 
            var Name = this.state.data[i].name
            var Email = this.state.data[i].email
            var FirstName = this.state.data[i].contactPersonFirstName
            var LastName = this.state.data[i].contactPersonLastName
            var ContactPerson = FirstName + " " + LastName
            var FullAddress = AddressLine1 + " " + AddressLine2 + " " + City + " " + State + " " + Zip + " " 

            this.geoCoder(FullAddress, PhoneNumber, Name, Email, ContactPerson)
        };
    };
    
    //geocoder
    geoCoder(FullAddress, PhoneNumber, Name, Email, ContactPerson){

        Geocoder.init('AIzaSyCk5UH7_180KgsrOD8MB8_UuoDOHZiS3QY'); 

        Geocoder.from(FullAddress)
        .then(json => {
             
            console.log(FullAddress)
            
            var location = json.results[0].geometry.location

            this.state.results.push([{FullAddress, ContactPerson, Email, PhoneNumber, Name, location}]);
         
        console.log(this.state.results)
        this.forceUpdateHandler();   
        })
    };
    
    //marker selector
    handleClick = (marker, event) => {
        this.setState({ selectedMarker: marker })
    };
    
    //filter
    lawClinic(evt){
        this.props.history.push("/LawClinicMap")
    };

    lawSchool(evt){
        this.props.history.push("/LawSchoolMap")
    };
    
    //forceUpdate, fixes rendering issues with markers
    forceUpdateHandler(){
      this.forceUpdate();
    };
 
    render() {
        return (
          <div>
          {/*map with markers*/}
          <MapWithAMarker
            selectedMarker={this.state.selectedMarker}
            markers={this.state.results}
            onClick={this.handleClick}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />

          <div>Filter by: <button className="btn btn-primary" onClick={this.lawClinic}>Law Clinics</button>{' '}<button className="btn btn-primary" onClick={this.lawSchool}>Law School Clinics</button>{' '}</div>
          </div>

        )   
      };
    };
    



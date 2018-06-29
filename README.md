# GoogleMapsWithMultipleMarkers
A map utilizing react-google-maps and react-native-geocoding to place multiple markers on the map for local law school clinics within the state of California.



<a href="https://ibb.co/k1eOwd"><img src="https://image.ibb.co/hBuCpy/maps2.png" alt="maps2" border="0"></a>


The function geo locate takes the data given from the API call and breaks it down into seperate arrays which is then passed to react-native-geocodings version of the Geocoder

<a href="https://ibb.co/b9p0vT"><img src="https://preview.ibb.co/jbMr28/Geo_Locate.png" alt="Geo_Locate" border="0"></a>

The geoCoder function then proceeds to utilize the Full address variable to create an array of locations called "location" and then pushes it and the rest of the data into this.state.results. The forceUpdateHandler function is used to ensure that the markers will render. 

<a href="https://ibb.co/cnoAvT"><img src="https://preview.ibb.co/bGwKpo/GeoCoder.png" alt="GeoCoder" border="0"></a>

The markers use this.state.results

<a href="https://ibb.co/nByAvT"><img src="https://preview.ibb.co/mdOcaT/Marker.png" alt="Marker" border="0"></a>

it then uses the location once .mapped to find the lat lng it needs as well as the information that is seen within its InfoWindow.

<a href="https://ibb.co/eTsZpo"><img src="https://preview.ibb.co/g0T79o/Map_With_AMarker.png" alt="Map_With_AMarker" border="0"></a>

We use props.selected marker (As shown above) to make sure only one info window appears at a time. 

<a href="https://imgbb.com/"><img src="https://image.ibb.co/dewzN8/handle_Click.png" alt="handle_Click" border="0"></a>

# GoogleMapsWithMultipleMarkers
A map utilizing react-google-maps and react-native-geocoding to place multiple markers on the map for local law school clinics within the state of California.



![Alt Text](https://media.giphy.com/media/QNACyTahEdEpDeFsxq/giphy.gif)


The function geo locate takes the data given from the API call and breaks it down into seperate arrays which is then passed to react-native-geocodings version of the Geocoder

<a href="https://ibb.co/b9p0vT"><img src="https://preview.ibb.co/jbMr28/Geo_Locate.png" alt="Geo_Locate" border="0"></a>

The geoCoder function then proceeds to utilize the Full address variable to create an array of locations called "location" and then pushes it and the rest of the data into this.state.results. The forceUpdateHandler function is used to ensure that the markers will render. 

<a href="https://ibb.co/cnoAvT"><img src="https://preview.ibb.co/bGwKpo/GeoCoder.png" alt="GeoCoder" border="0"></a>

The markers use this.state.results

<a href="https://ibb.co/nByAvT"><img src="https://preview.ibb.co/mdOcaT/Marker.png" alt="Marker" border="0"></a>

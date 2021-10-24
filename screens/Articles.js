import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import MapView from 'react-native-maps';

var data = require('../assets/map/stations.json');
for(var i = 0; i < data.length; i++) {
  var obj = data[i];
  }
  
class Booking extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isLoading: true,
      markers: data,
    };
  };

  render() {
    return (
      <MapView
        style={{
          flex: 1
        }}
        initialRegion={{
          latitude: -27.497,
          longitude: 153.0025,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {this.state.markers.map((marker, index) => {
     const coords = {
         latitude: marker.latitude,
         longitude: marker.longitude,
     };

     const metadata = `Status: ${marker.statusValue}`;

     return (
         <MapView.Marker
            key={index}
            coordinate={coords}
            title={marker.HospitalName}
            description={metadata}
         />
     );
  })}
      </MapView>
    );
  }
}
export default Booking;
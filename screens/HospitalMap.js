import React from "react";
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  View,
  Alert,
} from "react-native";
import { Block, Text, Button} from "galio-framework";
import {  Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import MapView from 'react-native-maps';
import { Header} from "../components";
import { Fontisto } from '@expo/vector-icons'; 

const { width, height } = Dimensions.get("screen");
const createOneButtonAlert = () =>
  Alert.alert(
    "Complete",
    "Reservation completed",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
);

var data = require('../assets/map/stations.json');
for(var i = 0; i < data.length; i++) {
  var obj = data[i];
  }

class HospitalMap extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    firstSearchPageData: [],
    isLoading: true,
      markers: data,
    };
  }



  render() {
    const { navigation } = this.props;
    
    return (
      <Block flex middle>
        <StatusBar hidden />
        
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              <Block flex>
           
                <Block>
                <Header
 
             title="HospitalMap"
             back
             optionLeft="Option 1"
             optionRight="Option 2"
             style={{marginBottom:2}}
             navigation={this.props.navigation}
             titleStyle = {{fontWeight: "bold", fontSize:30, marginLeft:35}} />
             <Text style={{fontSize:25, fontWeight:'bold', marginLeft:38, marginTop:20}}>Look for a nearby hospital</Text>
                    </Block>                    
                    
                    <Block flex middle style={styles.card}>
                      
                    <MapView
                            style={styles.map}
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
                          
                    
                    <View style={ {flexDirection:'row'}}>
                    <View>
                    <Button color="danger" onPress={() => navigation.navigate('SympotomChecker')} style={styles.createButton}>
                    <Icon name="Safety" family="AntDesign" color={"#ffffff"} size={23} />
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            Sympotom Check
                        </Text>
                      </Button>
                    </View>
                    <View>
                    <Button color="primary" onPress={() => navigation.navigate('Booking')} style={styles.createButton}>
                    <Icon name="trello" family="Feather" color={"#ffffff"} size={23} />
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            Booking now
                        </Text>
                      </Button>
                    </View>
                </View>
                    </Block>

                </Block>
              </Block>
            </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width ,
    height: height,
    backgroundColor: "#ffffff",
    marginTop:30,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  map: {
    width: width*0.78,
    borderRadius:25,
    height: height * 0.61,
    marginTop:0,
    borderColor:"#000000",
    borderStyle:'solid',
  },
  
  createButton: {
    width: width * 0.35,
    height: height * 0.08,
    marginBottom: 20,
    marginTop:15
  },
  card:
  {
    width: width * 0.8,
    marginLeft: 40,
    height: height,
    shadowColor: "black",
    marginTop:30,
    marginBottom:70,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    backgroundColor:"rgb(240,248,255)",
    borderWidth: 3,
    
    elevation:20,
  }
});

export default HospitalMap;
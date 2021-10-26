import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  Linking,
} from 'react-native';
import { Block, Text, Icon} from "galio-framework";
import { Images } from "../constants"; 
import { Button } from '../components';
import { Header} from "../components";
const { width, height } = Dimensions.get("screen");

class Emergency extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block flex >
        <Header
 
             title="Emergency Call"
             back
             optionLeft="Option 1"
             optionRight="Option 2"
             style={{marginBottom:2}}
             navigation={this.props.navigation}
             titleStyle = {{fontWeight: "bold", fontSize:28, marginLeft:width *0.08, fontFamily: 'serif'}} />

        <Block safe flex middle style={styles.card}>
          <Text style = {styles.headerText}>Attention</Text>
          <Text style = {styles.secondText}>Press the button </Text>
          <Text style = {styles.thirdText}>will call for help </Text>
          
          <Button color="error" style = {styles.callbutton} onPress={()=>{Linking.openURL('tel:000');}}>
            <Text style = {styles.callbuttonText}>000</Text>
          </Button>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Find your loaction </Text>
         <Text style={{fontSize:20, fontWeight:'bold'}}> and nearby hospital </Text>
          <Button color="PRIMARY" style = {styles.button} onPress={() => navigation.navigate('HospitalMap')}>
          <Icon name="map" family="Foundation" color={"#ffffff"} size={50} />
          </Button>
        </Block>
        
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  card:
  {
    width: width * 0.8,
    marginLeft: width * 0.10,
    height: height * 0.9,
    shadowColor: "black",
    marginTop:80,
    marginBottom:120,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    backgroundColor:"rgb(240,248,255)",
    borderWidth: 3,
    borderRadius: 20,
    elevation:20,
  },
  callbutton: {
    width: width * 0.4, 
    height:120,
    marginBottom:25
  },
  callbuttonText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  headerText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 30,
  },
  secondText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },
  thirdText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 40,
  },
  button: {
    width: width * 0.41, 
    height:50,
    marginBottom:10
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default Emergency;
import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  Linking,
} from 'react-native';
import { Block, Text} from "galio-framework";
import { Images } from "../constants"; 
import { Button } from '../components';
import { Header} from "../components";
const { width, height } = Dimensions.get("screen");

class Emergency extends React.Component{
  render() {
    return (
      <Block flex >
        <Header
 
             title="Emergency Call"
             back
             optionLeft="Option 1"
             optionRight="Option 2"
             style={{marginBottom:2}}
             navigation={this.props.navigation}
             titleStyle = {{fontWeight: "bold", fontSize:30, marginLeft:35}} />

        <Block safe flex middle>
          <Text style = {styles.headerText}>Attention</Text>
          <Text style = {styles.secondText}>This will call for help</Text>
          <Button color="error" style = {styles.button} onPress={()=>{Linking.openURL('tel:000');}}>
            <Text style = {styles.buttonText}>000</Text>
          </Button>
        </Block>
        
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 200, 
    height:150,
  },
  buttonText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  headerText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 50,
  },
  secondText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 50,
  }
});

export default Emergency;
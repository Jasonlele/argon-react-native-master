import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  TouchableWithoutFeedback

} from "react-native";
import { Block, Text, theme,NavBar,Input,Button  } from "galio-framework";
import { withNavigation } from '@react-navigation/compat';
import { Header} from "../components";
import { Images } from "../constants";
import { HeaderHeight } from "../constants/utils";

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Entypo';
import * as SQLite from "expo-sqlite";
import  {DeviceEventEmitter} from 'react-native';



const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    const { navigation } = this.props;

    return (
      <Block>                  
        <Header
      title="Medical Insurance"
      back
      optionLeft="Option 1"
      optionRight="Option 2"
      style={{marginBottom:2}}
      navigation={this.props.navigation}
      titleStyle = {{fontWeight: "bold", fontSize:25, marginLeft:35}} />


        <Block flex>
              <Block style={styles.clinicCard}>
                <Block style={{marginLeft:10}}>
                  <Text style={{fontSize:30, fontWeight: "bold", marginLeft:140, marginTop:40}}>Clinic</Text>
                  <Text style={{fontSize:23,marginTop:5, marginBottom:50, marginLeft:85, marginBottom:40}}>General Pracitioner</Text>
                  
                </Block>
                <Block style ={{marginLeft:20}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('uploadProfile')}>
                <Icon
                  name="right"
                  size={35}
                  color="black"
                  style={{ marginTop:55,marginLeft:15}}
                 />
                </TouchableWithoutFeedback>

                </Block>
              </Block>

              <Block style={styles.centerCard}>
                <Block style={{marginLeft:10}}>
                  <Text style={{fontSize:30, fontWeight: "bold", marginLeft:68, marginTop:40}}>Medical Center</Text>
                  <Text style={{fontSize:23,marginTop:5, marginBottom:50, marginLeft:130, marginBottom:40}}>Specialist</Text>
                  
                </Block>
                <Block style ={{marginLeft:20}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('uploadProfile')}>
                <Icon
                  name="right"
                  size={35}
                  color="black"
                  style={{ marginTop:55,marginLeft:20}}
                 />
                </TouchableWithoutFeedback>
                </Block>
              </Block>

              <Block style={styles.hospitalCard}>
                <Block style={{marginLeft:10}}>
                  <Text style={{fontSize:30, fontWeight: "bold", marginLeft:120, marginTop:40}}>Hospital</Text>
                  <Text style={{fontSize:23,marginTop:5, marginBottom:50, marginLeft:100, marginBottom:40}}>Private/Public</Text>
                  
                </Block>
                <Block style ={{marginLeft:20}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('uploadProfile')}>
                <Icon
                  name="right"
                  size={35}
                  color="black"
                  style={{ marginTop:55,marginLeft:50}}
                 />
                </TouchableWithoutFeedback>
                </Block>
              </Block>

          </Block>
      </Block>

    );
  }
}

const styles = StyleSheet.create({
  
  clinicCard: {
    marginTop: 50,
    marginBottom: 20,
    width: width ,
    height: 150,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 0,
    flexDirection:  'row',
    backgroundColor:"#7fffd4",
    borderWidth: 3,
    borderRadius: 20,
  },
  centerCard: {
    marginTop: 50,
    marginBottom: 20,
    width: width ,
    height: 150,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 0,
    flexDirection:  'row',
    backgroundColor:"#7fffd4",
    borderWidth: 3,
    borderRadius: 20,
  },
  hospitalCard: {
    marginTop: 50,
    marginBottom: 20,
    width: width ,
    height: 150,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 0,
    flexDirection:  'row',
    backgroundColor:"#7fffd4",
    borderWidth: 3,
    borderRadius: 20,
  },
  
});

export default Profile;

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

import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
class Insurance extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block >                  
               <Header
                    title="Realtime Translate"
                    back
                    optionLeft="Option 1"
                    optionRight="Option 2"
                    style={{marginBottom:2}}
                    navigation={this.props.navigation}
                    titleStyle = {{fontWeight: "bold", fontSize:25, marginLeft:35}} />


        <Block flex>
              <Block style={styles.clinicCard}>
                <Block style={{marginLeft:10}}>
                  <Text style={{fontSize:30, fontWeight: "bold", marginLeft:140, marginTop:30}}>Clinic</Text>
                  <Text style={{fontSize:23,marginTop:5, marginBottom:50, marginLeft:85, marginBottom:40}}>General Pracitioner</Text>
                  
                </Block>
                <Block style ={{marginLeft:20}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('insuranceClinic')}>
                <Icon
                  name="right"
                  size={35}
                  color="black"
                  style={{ marginTop:50,marginLeft:13}}
                 />
                </TouchableWithoutFeedback>

                </Block>
              </Block>

              <Block style={styles.centerCard}>
                <Block style={{marginLeft:10}}>
                  <Text style={{fontSize:30, fontWeight: "bold", marginLeft:68, marginTop:30}}>Medical Center</Text>
                  <Text style={{fontSize:23,marginTop:5, marginBottom:50, marginLeft:130, marginBottom:40}}>Specialist</Text>
                  
                </Block>
                <Block style ={{marginLeft:20}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('insuranceMedicalCenter')}>
                <Icon
                  name="right"
                  size={35}
                  color="black"
                  style={{ marginTop:50,marginLeft:20}}
                 />
                </TouchableWithoutFeedback>
                </Block>
              </Block>

              <Block style={styles.hospitalCard}>
                <Block style={{marginLeft:10}}>
                  <Text style={{fontSize:30, fontWeight: "bold", marginLeft:120, marginTop:30}}>Hospital</Text>
                  <Text style={{fontSize:23,marginTop:5, marginBottom:50, marginLeft:100, marginBottom:40}}>Private/Public</Text>
                  
                </Block>
                <Block style ={{marginLeft:20}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('insuranceHospital')}>
                <Icon
                  name="right"
                  size={35}
                  color="black"
                  style={{ marginTop:50,marginLeft:50}}
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
    marginBottom: 5,
    width: width  ,
    height: 150,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 0,
    flexDirection:  'row',
    backgroundColor:"rgb(240,248,255)",
    borderWidth: 3,
    borderRadius: 20,
    elevation:20,
  },
  centerCard: {
    marginTop: 40,
    marginBottom: 20,
    width: width ,
    height: 150,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 0,
    flexDirection:  'row',
    backgroundColor:"rgb(240,248,255)",
    borderWidth: 3,
    borderRadius: 20,
    elevation:20,
  },
  hospitalCard: {
    marginTop: 40,
    marginBottom: 20,
    width: width ,
    height: 150,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 0,
    flexDirection:  'row',
    backgroundColor:"rgb(240,248,255)",
    borderWidth: 3,
    borderRadius: 20,
    elevation:20,
  },
  
});

export default Insurance;

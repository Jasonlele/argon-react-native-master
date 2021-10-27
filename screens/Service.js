import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback

} from "react-native";
import { Block, Text, theme,Input,Button } from "galio-framework";
import { Header} from "../components";
import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get("screen");
class Service extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block flex>        
         <Block flex>
               <Header
                    title="Medical Service"
                    back
                    optionLeft="Option 1"
                    optionRight="Option 2"
                    style={{marginBottom:2}}
                    navigation={this.props.navigation}
                    titleStyle = {{fontWeight: "bold", fontSize:25, marginLeft:45, fontFamily: 'serif'}} />
                    
          <Block flex middle>
          <Block>
              <Text style = {{fontSize:25, marginBottom:25}}>Select an option to check</Text>
          </Block>

          <Block style={styles.clinicCard}>
            <Block style={{marginLeft:0}}>
                <Text style={{fontSize:30, fontWeight: "bold", marginLeft:130, marginTop:30}}>Clinic</Text>
                <Text style={{fontSize:23,marginTop:5, marginBottom:50, marginLeft:80, marginBottom:40}}>General Pracitioner</Text>
              </Block>

              <Block style ={{marginLeft:0}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('ServiceClinic')}>
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
                <Text style={{fontSize:30, fontWeight: "bold", marginLeft:45, marginTop:30}}>Medical Center</Text>
                <Text style={{fontSize:23,marginTop:5, marginBottom:50, marginLeft:108, marginBottom:40}}>Specialist</Text>
              </Block>
              <Block style ={{marginLeft:4}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('ServiceMedicalCenter')}>
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
                <Text style={{fontSize:30, fontWeight: "bold", marginLeft:100, marginTop:30}}>Hospital</Text>
                <Text style={{fontSize:23,marginTop:5, marginBottom:50, marginLeft:85, marginBottom:40}}>Private/Public</Text> 
              </Block>
              <Block style ={{marginLeft:0}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('ServiceHospital')}>
                  <Icon
                    name="right"
                    size={35}
                    color="black"
                    style={{ marginTop:50,marginLeft:48}}
                  />
                  </TouchableWithoutFeedback>
              </Block>
            </Block>
          </Block>
      </Block>
    </Block>
    );
  }
}

const styles = StyleSheet.create({
  
  clinicCard: {
    marginTop: 10,
    marginBottom: 5,
    width: width *0.9 ,
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
    width: width *0.9,
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
    width: width *0.9,
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

export default Service;

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
                    title="Medical Insurance"
                    back
                    optionLeft="Option 1"
                    optionRight="Option 2"
                    style={{marginBottom:2}}
                    navigation={this.props.navigation}
                    titleStyle = {{fontWeight: "bold", fontSize:25, marginLeft:45}} />
        <Block flex middle>
                <Block>
                  <Text style = {{fontSize:25, marginBottom:15}}>Select an option to check</Text>
                  <Text style = {{fontSize:25, marginBottom:5}}>Which is the best mathes</Text>
                </Block>
              <Block style={styles.clinicCard}>
                
                <Block style={{marginLeft:0}}>
                  <Text style={{fontSize:30, fontWeight: "bold", marginLeft:110, marginTop:30}}>Studying</Text>
                  <Text style={{fontSize:23,marginTop:5, marginBottom:50, marginLeft:105, marginBottom:40}}>View Covers</Text>
                </Block>
                <Block style ={{marginLeft:0}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('StudyingInsurance')}>
                <Icon
                  name="right"
                  size={35}
                  color="black"
                  style={{ marginTop:50,marginLeft:45}}
                 />
                </TouchableWithoutFeedback>

                </Block>
              </Block>

              <Block style={styles.centerCard}>
                <Block style={{marginLeft:10}}>
                  <Text style={{fontSize:30, fontWeight: "bold", marginLeft:110, marginTop:30}}>Visiting</Text>
                  <Text style={{fontSize:23,marginTop:5, marginBottom:50, marginLeft:95, marginBottom:40}}>View Covers</Text>
                  
                </Block>
                <Block style ={{marginLeft:4}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('VisitingInsurance')}>
                <Icon
                  name="right"
                  size={35}
                  color="black"
                  style={{ marginTop:50,marginLeft:40}}
                 />
                </TouchableWithoutFeedback>
                </Block>
              </Block>

              <Block style={styles.hospitalCard}>
                <Block style={{marginLeft:10}}>
                  <Text style={{fontSize:30, fontWeight: "bold", marginLeft:113, marginTop:30}}>Citizen</Text>
                  <Text style={{fontSize:23,marginTop:5, marginBottom:50, marginLeft:95, marginBottom:40}}>View Covers</Text>
                  
                </Block>
                <Block style ={{marginLeft:0}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('CitizenInsurance')}>
                <Icon
                  name="right"
                  size={35}
                  color="black"
                  style={{ marginTop:50,marginLeft:42}}
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

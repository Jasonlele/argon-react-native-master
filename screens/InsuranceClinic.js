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
import { Header} from "../components";


const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class InsuranceClinic extends React.Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    const { navigation } = this.props;

    return (
      <Block>                  
        <Header
      title="Clinic"
      back
      optionLeft="Option 1"
      optionRight="Option 2"
      style={{marginBottom:2}}
      navigation={this.props.navigation}
      titleStyle = {{fontWeight: "bold", fontSize:30, marginLeft:45}} />


        <Block flex>
            <Block flex middle>
                <Text style={{fontSize:40,marginTop:160, fontWeight: "bold", marginLeft:5, marginBottom:40}}>Introduction</Text>
            </Block>
              <Block style={styles.clinicCard}>
                <Block style={{marginLeft:10}}>
                    <Text style={{fontSize:28, marginTop:30}}>If you just have non-emergency 
                        symptoms, visiting general 
                        practitioners (GP) in clinics is 
                        usually the first choice. You may 
                        need to make an appointment 
                        firstly. If you still need a further 
                        diagnosis, the GP will refer you to 
                        a specialist.
                    </Text>
                </Block>
                
              </Block>

          </Block>
      </Block>

    );
  }
}

const styles = StyleSheet.create({
  
  clinicCard: {
    marginTop:125,
    marginBottom: 5,
    marginLeft: 22,
    width: width  * 0.9,
    height: 500,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 0,
    flexDirection:  'row',
    backgroundColor:"rgb(240,248,255)",
    borderWidth: 3,
    borderRadius: 20,
    elevation:10
  }
});

export default InsuranceClinic;

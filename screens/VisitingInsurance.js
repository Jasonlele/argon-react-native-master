import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  TouchableWithoutFeedback,
  SafeAreaView
} from "react-native";
import { Block, Text,Input,Button  } from "galio-framework";
import { Header} from "../components";
import Icon from 'react-native-vector-icons/AntDesign';


const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class VisitingInsurance extends React.Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    const { navigation } = this.props;

    return (
      <Block>                  
        <Header
      title="Visiting Insurance"
      back
      optionLeft="Option 1"
      optionRight="Option 2"
      style={{marginBottom:2}}
      navigation={this.props.navigation}
      titleStyle = {{fontWeight: "bold", fontSize:27, marginLeft: width * 0.04, fontFamily: 'serif'}} />


        <Block flex>
            <Block flex middle>
                <Text style={{fontSize:40,marginTop:160, fontWeight: "bold", marginLeft:5, marginBottom:40}}>Introduction</Text>
            </Block>
            <Block style={styles.clinicCard}>
                <Block style={{marginLeft:10}}>
                    <ScrollView>
                        <Text style={{fontSize:26, marginTop:10}}>
                        Overseas Visitors Health Cover (OVHC) is a form of health insurance which is designed for visitors to Australia who do not have access to Australia's public Medicare system for medical or hospital expenses. OVHC insures against potential expenses you may incur if you require medical or hospital treatment. 

Every OVHC policy will differ in costs, eligibility and benefits. However, most policies should cover you for medically-required hospital admissions and a portion of doctor's fees.
                        </Text>
                    </ScrollView>
                </Block>
                
            </Block>
                <View style={ {flexDirection:'row'}}>
                <View>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('StudyingInsurance')}>
                            <Icon
                            name="doubleleft"
                            size={26}
                            color="black"
                            style={{marginTop:14, marginLeft:25}}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <Text style= {{fontSize:23, marginLeft:5,marginTop: 10}} onPress={() => navigation.navigate('StudyingInsurance')}>Previous</Text>
                    </View>
                    
                    <View>
                        <Text style= {{fontSize:23, marginLeft:83,marginTop: 10}} onPress={() => navigation.navigate('CitizenInsurance')}>Next Type</Text>
                    </View>
                    <View>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('CitizenInsurance')}>
                            <Icon
                            name="doubleright"
                            size={26}
                            color="black"
                            style={{marginTop:14}}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
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

export default VisitingInsurance;

import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  View,
  TouchableWithoutFeedback

} from "react-native";
import { Block, Text, theme,NavBar,Input,Button  } from "galio-framework";
import { Header} from "../components";
import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class StudyingInsurance extends React.Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    const { navigation } = this.props;

    return (
      <Block>                  
        <Header
      title="Studing Insurance"
      back
      optionLeft="Option 1"
      optionRight="Option 2"
      style={{marginBottom:2}}
      navigation={this.props.navigation}
      titleStyle = {{fontWeight: "bold", fontSize:28, marginLeft:25}} />


        <Block flex>
            <Block flex middle>
                <Text style={{fontSize:40,marginTop:160, fontWeight: "bold", marginLeft:5, marginBottom:40}}>Introduction</Text>
            </Block>
              <Block style={styles.clinicCard}>
                <Block style={{marginLeft:10}}>
                <ScrollView>
                    <Text style={{fontSize:26, marginTop:10}}>International students undertaking formal studies in Australia, and their dependents (for example, spouses and children under 18 years old), must obtain OSHC. It includes cover for visits to the doctor, some hospital treatment, ambulance cover and limited pharmaceuticals (medicines). OSHC insurers can provide a range of different OSHC products. These may range from a basic product which covers only the compulsory minimum services to comprehensive products which cover, in addition to the compulsory minimum services, extra services as specified under the particular policy. Learn more about OSHC, including a list of the providers at www.privatehealth.gov.au/.
                    </Text>
                    </ScrollView>
                </Block>
              </Block>
              
                <View style={ {flexDirection:'row'}}>
                    <View>
                        <Text style= {{fontSize:23, marginLeft:25,marginTop: 10}} onPress={() => navigation.navigate('Insurance')}>Return</Text>
                    </View>
                    <View>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Insurance')}>
                            <Icon
                            name="retweet"
                            size={28}
                            color="black"
                            style={{marginTop:12}}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <Text style= {{fontSize:23, marginLeft:110,marginTop: 10}} onPress={() => navigation.navigate('VisitingInsurance')}>Next Type</Text>
                    </View>
                    <View>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('VisitingInsurance')}>
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

export default StudyingInsurance;

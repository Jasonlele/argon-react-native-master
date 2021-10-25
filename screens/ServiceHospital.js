import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  View,
  TouchableWithoutFeedback

} from "react-native";
import { Block, Text, theme,NavBar,Input,Button  } from "galio-framework";
import { withNavigation } from '@react-navigation/compat';
import { Header} from "../components";
import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;
class ServiceHospital extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block>                  
                  <Header         
             title="Hospital"
             back
             optionLeft="Option 1"
             optionRight="Option 2"
             style={{marginBottom:2}}
             navigation={this.props.navigation}
             titleStyle = {{fontWeight: "bold", fontSize:30, marginLeft:35}} />
        <Block flex>
            <Block flex middle>
                <Text style={{fontSize:40,marginTop:160, fontWeight: "bold", marginLeft:5, marginBottom:40}}>Introduction</Text>
            </Block>
                <Block style={styles.clinicCard}>
                    <Block style={{marginLeft:10}}>
                    <ScrollView>
                        <Text style={{fontSize:26, marginTop:10}}>Hospital services in Australia are provided by both the public and private sectors. Public hospitals are owned and managed by state and territory governments.

                        Medicare provides access to free treatment and accommodation in a public hospital for Australian residents and overseas visitors from countries with a reciprocal arrangement.
                        </Text>
                        </ScrollView>
                    </Block>
                </Block>
                <View style={ {flexDirection:'row'}}>
                <View>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('ServiceMedicalCenter')}>
                            <Icon
                            name="doubleleft"
                            size={26}
                            color="black"
                            style={{marginTop:14, marginLeft:25}}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <Text style= {{fontSize:23, marginLeft:5,marginTop: 10}} onPress={() => navigation.navigate('ServiceMedicalCenter')}>Previous</Text>
                    </View>
                    
                    <View>
                        <Text style= {{fontSize:23, marginLeft:120,marginTop: 10}} onPress={() => navigation.navigate('Service')}>Return</Text>
                    </View>
                    <View>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Service')}>
                            <Icon
                            name="retweet"
                            size={28}
                            color="black"
                            style={{marginTop:12}}
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

export default ServiceHospital;

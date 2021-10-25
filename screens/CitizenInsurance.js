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
class CitizenInsurance extends React.Component {
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
                        <Text style={{fontSize:26, marginTop:10}}>Medicare is available to Australian and New Zealand citizens, permanent residents in Australia, and people from countries with reciprocal agreements.

Medicare covers all of the cost of public hospital services. It also covers some or all of the costs of other health services. These can include services provided by GPs and medical specialists. They can also include physiotherapy, community nurses and basic dental services for children.
                        </Text>
                        </ScrollView>
                    </Block>
                </Block>
                <View style={ {flexDirection:'row'}}>
                <View>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('VisitingInsurance')}>
                            <Icon
                            name="doubleleft"
                            size={26}
                            color="black"
                            style={{marginTop:14, marginLeft:25}}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <Text style= {{fontSize:23, marginLeft:5,marginTop: 10}} onPress={() => navigation.navigate('VisitingInsurance')}>Previous</Text>
                    </View>
                    
                    <View>
                        <Text style= {{fontSize:23, marginLeft:120,marginTop: 10}} onPress={() => navigation.navigate('Insurance')}>Return</Text>
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

export default CitizenInsurance;

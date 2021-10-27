import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Block, Text, theme,NavBar,Input,Button  } from "galio-framework";
import { Header} from "../components";
import { Images } from "../constants";
import { HeaderHeight } from "../constants/utils";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import * as SQLite from "expo-sqlite";
import ModalDropdown from 'react-native-modal-dropdown';

const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     insurance:"StudyingInsurance",
     imageUri:"1111", 
     Refresh:false,
     firstSearchPageData:["                  Click here to check"]
    };
    

  }
  //build and connect data base 
  RefreshPage=()=>{
        const{firstSearchPageData}= this.state
    
        db.transaction((tx) => {
          tx.executeSql("select bookname from BookingDetail where phone = ?", 
          [test],
            (_, result) =>{
            var len = result.rows.length;                      
            let result1=[]
              if(len>0){
                for(let i=0; i<len; i++){
                  // result1.push(result.rows.item(i).date +"      "+ result.rows.item(i).name +"      "+ result.rows.item(i).hostipal)
                  // console.log(JSON.stringify(result.rows.item(i).date))
                  result1.push(result.rows.item(i).bookname)
                }
                this.setState({firstSearchPageData :result1})        
              } 
            }
            );
      });
  }
  
  render() {
    const { navigation } = this.props;
    const{imageUri, insurance, firstSearchPageData} = this.state;
    global.useUri = imageUri;
    //database operation

    const db = SQLite.openDatabase("db.DECO3801");

    //删除表，请一定要注释 delete database
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "DROP TABLE BookingDetail;"
    //   );
    //   // console.log(JSON.stringify(db))
    
    // });

    //pick the appointment data from database
    db.transaction((tx) => {
      tx.executeSql("select uri from ProfileImage where phone = ?", 
      [test],
       (_, result) =>{
          var len = result.rows.length;
          if(len>0){
            this.setState({imageUri:result.rows.item(len-1).uri})
          } 
       }); 
    });


    return (
      
      //profile container
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '25%' }}
            >
          <Header
              title="My information"
              back
              optionLeft="Option 1"
              optionRight="Option 2"
              style={{marginBottom:2}}
              navigation={this.props.navigation}
              titleStyle = {{fontWeight: "bold", fontSize:25, marginLeft:35, fontFamily: 'serif'}} />

              <Block flex style={styles.profileCard}>
                <Block style={styles.avatarContainer}>
                  <Image source={{ uri: imageUri }} style={styles.avatar} />
                  <Block style ={{marginLeft:40}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('uploadProfile')}>
                    <FontAwesome5 
                    name="arrow-circle-right" 
                    size={25} 
                    color="black"
                    style={{marginTop:5}} 
                    />
                    </TouchableWithoutFeedback>
                  </Block>
                </Block>

                <Block style={{marginLeft:15, marginTop:5}}>
                  <View style={ {flexDirection:'row', marginTop:25}}>
                      <View>
                      <MaterialIcons style={{marginTop:5}} name="account-circle" size={30} color="black" />
                      </View>
                      <View>
                      <Text style={{marginLeft:12,fontSize:28}}>{testyyf}</Text>
                      </View>
                  </View>

                  <View style={ {flexDirection:'row', marginTop:20}}>
                    <View>
                    <Ionicons name="phone-portrait" size={30} color="black" />
                    </View>
                    <View>
                      <Text style={{fontSize:25,marginLeft:10}}>{test}</Text>
                    </View>
                  </View>
                </Block>
              </Block>

{/* 
              从数据库里取出的值     */}
          <Block style={styles.appCard}>
            <TouchableWithoutFeedback onPress={this.RefreshPage}>
            <Block flex style={styles.appointment}>
              <Block>
                <View style={ {flexDirection:'row', marginTop:1, marginLeft:20}}>
                  <View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Booking')}>
                    <MaterialCommunityIcons style={{marginTop:2}} name="timeline-plus" size={32} color="black" />
                    </TouchableWithoutFeedback> 
                  </View>
                <View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Booking')}>
                    <Text style ={{fontSize:25, marginLeft:20, fontWeight:'bold', marginBottom:2}}>My Appointment</Text>
                    </TouchableWithoutFeedback> 
                  </View>   
                </View>
              </Block>
              <ScrollView>
                {firstSearchPageData.map((item) => {
                      return (
                      <Block key={item}>                       
                        <Text key={item} style ={{marginTop:5, fontSize:15}}>                                                 
                          {item}                   
                        </Text>
                      </Block>
                        )
                })}
              </ScrollView>
            </Block>
            </TouchableWithoutFeedback>
          </Block>   

          <Block style={styles.insuranceCard}>
            <Block flex style={styles.information}>
              <View style={ {flexDirection:'row', marginTop:15}}>
                <View>
                  <TouchableWithoutFeedback onPress={() => navigation.navigate('Insurance')}>
                  <FontAwesome5 name="hand-sparkles" size={28} color="black" />
                  </TouchableWithoutFeedback>
                </View>
                <View>
                  <TouchableWithoutFeedback onPress={() => navigation.navigate('Insurance')}>
                  <Text style ={{fontSize:25, fontWeight:"bold", marginLeft:30,marginTop: 0}}>My Insurance</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <ModalDropdown defaultValue=" Choose Types" 
                    dropdownStyle= {{marginLeft:0}} 
                    dropdownTextStyle={{fontSize:25}} 
                    textStyle={{fontSize:25, fontWeight:"bold", marginTop: 20, marginLeft: 15}} 
                    options={["StudyingInsurance", "VisitingInsurance", "CitizenInsurance"]}
                    onSelect = {(value) => this.setState({insurance:(String(this.state.insurance[value]))})}
                    />   
              </Block>
          </Block>
                  

          <Block style={styles.apphisCard}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('History')}>
            <View style={ {flexDirection:'row', marginTop:15, marginLeft:18}}>
              <View>
                <Icon2
                name="history"
                size={28}
                color="black"
                style={{ marginLeft:10,marginTop:10}}
              />
                    
              </View>
              <View>
                <Text style ={{fontSize:25, fontWeight:"bold", marginLeft:10, marginTop:7}}>Appointment History</Text>
              </View>
            </View>
            </TouchableWithoutFeedback>
          </Block>
        </ScrollView>
      </ImageBackground>
    </Block>
  </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width* 0.9,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height
  },
  profileCard: {
    width: width * 0.9,
    marginLeft: 20,
    height: height * 0.2,
    shadowColor: "black",
    marginTop:40,
    marginBottom:40,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    backgroundColor:"rgb(240,248,255)",
    borderWidth: 3,
    borderRadius: 20,
    elevation:20,
    flexDirection:  'row',
  },
  appCard: {
    width: width * 0.9,
    marginLeft: 20,
    height: height * 0.2,
    shadowColor: "black",
    marginTop:0,
    marginBottom:40,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    backgroundColor:"rgb(230,240,255)",
    borderWidth: 3,
    borderRadius: 20,
    elevation:20,
    flexDirection:  'row',
  },
  appointment: {
    padding: theme.SIZES.BASE,
    marginLeft:10,
    flexDirection:  'column',
  },
  insuranceCard: {
    width: width * 0.9,
    marginLeft: 20,
    height: height * 0.2,
    shadowColor: "black",
    marginTop:0,
    marginBottom:40,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    backgroundColor:"rgb(220,240,240)",
    borderWidth: 3,
    borderRadius: 20,
    elevation:20,
    flexDirection:  'row',
  },
  information:{
    marginTop:10,
    marginLeft:62,
  },
  boxUse: {
    flexDirection:  'row', 
    backgroundColor:"#ffffff",
     marginTop:15,
     paddingTop:7,
     height:70
  },

  avatarContainer: {
    marginTop:25,
    position: "relative",
    marginLeft:20,
  },
  avatar: {
    width: width * 0.26,
    height: height * 0.12,
    borderRadius: 62,
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  apphisCard: {
    width: width * 0.9,
    marginLeft: 20,
    height: height * 0.2,
    shadowColor: "black",
    marginTop:0,
    marginBottom:0,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    backgroundColor:"rgb(210,240,255)",
    borderWidth: 3,
    borderRadius: 20,
    elevation:20,
    flexDirection:  'row',
  },
});

export default Profile;
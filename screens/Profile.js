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
    this.state = {
     
     imageUri:"aaaa", 
     Refresh:false,
    };
    

  }

  RefreshPage=()=>{
    const{Refresh}=this.state
    this.setState({Refresh:true})
  }
  
  render() {
    const { navigation } = this.props;
    const{imageUri,Refresh} = this.state;
    //数据库操作
    const db = SQLite.openDatabase("db.DECO3801");
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists ProfileImage (id integer primary key not null, phone text, uri text);"
      );

      
      tx.executeSql("select uri from ProfileImage where phone = ?", 
      [test],
       (_, result) =>{
          var len = result.rows.length;
          if(len>0){
           
            //????
            this.setState({imageUri:result.rows.item(len-1).uri})
            

            
          } 
          
       }
         
  
        );
      
    });


    return (
      
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
           //source={Images.ProfileBackground}
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
              titleStyle = {{fontWeight: "bold", fontSize:25, marginLeft:35}} />

              <Block flex style={styles.profileCard}>
             

                <Block style={styles.avatarContainer}>
                  {/* <Image
                    source={require("../assets/imgs/user.png")}
                    style={styles.avatar}
                  /> */}
                  
                  <Image source={{ uri: imageUri }} style={styles.avatar} />
                  {/* <Text>{imageUri}</Text> */}
                      
                </Block>
                <Block style={{marginLeft:25, marginTop:23}}>
                  <Text style={{fontSize:18}}>{testyyf}</Text>
                  <Text style={{fontSize:18,marginTop:5}}>{test}</Text>
                  
                </Block>
                <Block style ={{marginLeft:20}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('uploadProfile')}>
                <Icon
                  name="right"
                  size={30}
                  color="black"
                  style={{ marginTop:30,marginLeft:20}}
                 />
                </TouchableWithoutFeedback>

                </Block>
              </Block>

              <Block flex style={styles.appointment}>
                <Block>
                <Text style ={{fontSize:20,fontWeight:'bold'}}>My Appointment</Text>
                </Block>
                <Block style={{ flexDirection:'row', marginTop:15,marginLeft:17}}>
                  <Text style = {{fontSize:20}}>06/12/2020</Text>
                  <Text style = {{marginLeft:30,fontSize:20}}>XX Hosptial</Text>
                  {/* <Icon
                  name="right"
                  size={24}
                  color="black"
                  style={{ marginLeft:30}}
                 /> */}
                  
                </Block>
                <Block style={{ flexDirection:'row', marginTop:15,marginLeft:17}}>
                  <Text style = {{fontSize:20}}>06/12/2020</Text>
                  <Text style = {{marginLeft:30,fontSize:20}}>XX Hosptial</Text>
                  {/* <Icon
                  name="right"
                  size={24}
                  color="black"
                  style={{ marginLeft:30}}
                 /> */}
                  
                </Block>
                <Block style={{ flexDirection:'row', marginTop:15,marginLeft:17}}>
                  <Text style = {{fontSize:20}}>06/12/2020</Text>
                  <Text style = {{marginLeft:30,fontSize:20}}>XX Hosptial</Text>
                  {/* <Icon
                  name="right"
                  size={24}
                  color="black"
                  style={{ marginLeft:30}}
                 /> */}
                  
                </Block>
              </Block>
              <Block flex style={styles.information}>


                <Block style={styles.boxUse}>
                <Icon
                  name="pluscircle"
                  size={30}
                  color="black"
                  style={{ marginLeft:10,marginTop:10}}
                 />

                    <Text style ={{fontSize:20,marginLeft:30,marginTop:12}}>My Insurance</Text>
                   
                    <Icon
                  name="right"
                  size={30}
                  color="black"
                  style={{ marginLeft:100,marginTop:10}}
                 />
                
                
                </Block>

{/* 
                <Block style={styles.boxUse}>
                <Icon
                  name="heart"
                  size={30}
                  color="black"
                  style={{ marginLeft:10}}
                 />

                    <Text style ={{fontSize:20,marginLeft:30}}>Favortite Doctor</Text>
                    <Text style ={{fontSize:20,marginLeft:30}}>2</Text>
                    <Icon
                  name="right"
                  size={30}
                  color="black"
                  style={{ marginLeft:40}}
                 />

                </Block> */}


                <Block style={styles.boxUse}>
                <Icon2
                  name="capsules"
                  size={30}
                  color="black"
                  style={{ marginLeft:10,marginTop:10}}
                 />

                    <Text style ={{fontSize:20,marginLeft:30,marginTop:12}}>My Medicare</Text>
                    <Text style ={{fontSize:20,marginLeft:30,marginTop:12}}>Verified</Text>
                    {/* <Icon
                  name="right"
                  size={30}
                  color="black"
                  style={{ marginLeft:10}}
                 /> */}

                </Block>

{/* 
                <Block style={styles.boxUse}>
                <Icon2
                  name="file-medical"
                  size={30}
                  color="black"
                  style={{ marginLeft:10}}
                 />

                    <Text style ={{fontSize:20,marginLeft:30}}>Basic Information</Text>
                    
                    <Icon
                  name="right"
                  size={30}
                  color="black"
                  style={{ marginLeft:65}}
                 />

                </Block> */}


                <Block style={styles.boxUse}>
                <Icon2
                  name="history"
                  size={30}
                  color="black"
                  style={{ marginLeft:10,marginTop:10}}
                 />

                    <Text style ={{fontSize:20,marginLeft:30,marginTop:12}}>Appointment History</Text>
                 
                    <Icon
                  name="right"
                  size={30}
                  color="black"
                  style={{ marginLeft:30,marginTop:12}}
                 />

                </Block>

                {/* <Button onPress={this.RefreshPage}>
                    <Text>refearch page</Text>
                </Button> */}
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
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    //marginHorizontal: theme.SIZES.BASE,
    width: width,
  //  marginTop:30,
    // borderTopLeftRadius: 6,
    // borderTopRightRadius: 6,
   
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 0,
    flexDirection:  'row',
    backgroundColor:"#D9E6F7"
  },
  appointment: {
    padding: theme.SIZES.BASE,
    backgroundColor:"#DCF7F2",
    marginTop:20,
    flexDirection:  'column',
  },
  information:{
    
   // backgroundColor:"yellow",
    marginTop:10,
    flexDirection:  'column',
  },
  boxUse: {
    flexDirection:  'row', 
    backgroundColor:"#B9EDC4",
     marginTop:15,
     paddingTop:7,
     height:70
  },

  avatarContainer: {
    position: "relative",
    // marginRight:width/2
    
    
  },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 62,
    borderWidth: 0
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
  }
});

export default Profile;

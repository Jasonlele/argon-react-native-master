import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  Image,
  Alert,
  ScrollView
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button } from "../components";
import { Images } from "../constants"; 
import { Input } from 'react-native-elements';
import * as SQLite from "expo-sqlite";
import { block } from "react-native-reanimated";

import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Entypo';


const { width, height } = Dimensions.get("screen");


class Translate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unTranslateText:"",
      translatedText:"",
      name:props.route.params.jjw,
      link:"testest",
      doctorName:"",
      introduction:"",
      hospital:"",
      date:"",
      time:""

    };
    // let yy = navigation.getParam("jjw"); 

    
 
  }

 // 
  submitBookig=()=>{
    //console.log("输入完成");
    const {name} = this.state;
    
    Alert.alert(
      "Appointment reminder",
      "Are you sure about this appointment?",
      [
        {
          text: "Sure",
          onPress: () => Alert.alert("You have successfully made an appointment ! !"),
          style: "destructive",
        },
      ],
      {
        cancelable: false,
        onDismiss:() =>{

          Alert.alert(
            "Appointment failed"
          )
          return
        }
         
      }
    );



      db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO BookingDetail (bookname, phone, finish) VALUES(?,?,'no')",
        [name,test]

      );


      tx.executeSql("select * from BookingDetail", 
      [],
       (_, result) =>{
        
        console.log(JSON.stringify(result.rows))
          
       }
        
        );
      
    });
 

    




  }

  render() {
    const { navigation } = this.props;
    const{unTranslateText,translatedText,name,link,doctorName,introduction,date,time,hospital} = this.state;

    const db = SQLite.openDatabase("db.DECO3801");
   
    
    db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists BookingDetail (id integer primary key not null, bookname text, phone text, finish text);"
        );
        
      });

  


      

      db.transaction((tx) => {
                  // console.log(item)
                //   console.log(name)
                  tx.executeSql("select imagelink, doctorname, introduction,hospital, date, time  from DoctorImage where nameuse = ? ", 
                  [name],
                   (_, result) =>{
                   
                    //  console.log(JSON.stringify(result.rows.item(0).date))
                                                                
                    // console.log(JSON.stringify(result.rows.item(0).imagelink))
                    this.setState({ 
                      link :result.rows.item(0).imagelink, 
                      doctorName :result.rows.item(0).doctorname,
                      introduction :result.rows.item(0).introduction,
                      hospital:result.rows.item(0).hospital,
                      date:result.rows.item(0).date,
                      time:result.rows.item(0).time
                      })
                    

                   }
                     
              
                    );
                    
                });



    return (
      <Block flex style={{backgroundColor: "rgb(240,248,255)"}}>
         <ImageBackground
                source={{uri:link}}
                style={styles.container}>
          <Text style={{marginLeft:235, fontSize:25,marginTop:100,fontWeight:'bold'}}>Dr. {doctorName}</Text>
         </ImageBackground>

         <Block style={{height:100,backgroundColor: theme.COLORS.WHITE,}}>
           <Block style ={{flexDirection: 'row'}}>
           <Icon
                  name="doctor"
                  size={13}
                  color="black"
                  style={{ marginTop:6,marginLeft:10}}
                 />
           <Text style={{fontWeight:'bold',fontSize:20,marginLeft:8,color:"#6D6F70",fontStyle:'italic'}}>introduction</Text>
           </Block>
           <Text style={{width:280,marginLeft:30,marginTop:10}}>{introduction}</Text>
         </Block>

         <Block style={{height:80,backgroundColor:theme.COLORS.WHITE,marginTop:20}}>
         <Block style ={{flexDirection: 'row'}}>
         <Icon2
            name="hospital-o"
            size={13}
            color="black"
            style={{ marginTop:6,marginLeft:10}}
            />
         <Text style={{fontWeight:'bold',fontSize:17,marginLeft:8, color:"#6D6F70"}}>Visiting hospital</Text>
         </Block>
         <Text style={{fontWeight:'bold',fontSize:23,marginLeft:88,marginTop:6}}>{hospital}</Text>
        </Block>

        <Block style={{height:250,backgroundColor:theme.COLORS.WHITE,marginTop:20}}>
          <Block style ={{flexDirection: 'row'}}>
          <Icon3
            name="clock"
            size={13}
            color="black"
            style={{ marginTop:10,marginLeft:10}}
          />
          <Text style={{fontWeight:'bold',fontSize:17,marginLeft:8,marginTop:5,color:"#6D6F70"}}>Next visit time  (subject to change)</Text>
          </Block>

         <Block style={{backgroundColor:"rgb(240,248,255)",marginTop:15,height:70,width:315,marginLeft:20}}>
         <Text style={styles.timeStyle}>{date}     {time}</Text>

         </Block>
         <ScrollView style={styles.scrollView} horizontal={true}>

          <Block style={styles.clenderStyle}>
            <Text style={{fontWeight:'bold',fontSize:18,marginLeft:35,marginTop:5,color:"#5FC1F0"}}>Monday</Text>
            <Text style={{fontWeight:'bold',marginTop:10,marginLeft:15}}>9 am to 12 am</Text>
            <Text style={{fontWeight:'bold',marginTop:10,marginLeft:15}} >Expert clinic</Text>

          </Block>
          <Block style={styles.clenderStyle2}>
            <Text style={{fontWeight:'bold',fontSize:18,marginLeft:30,marginTop:5,color:"#5FC1F0"}}>Tuesday</Text>
            <Text style={{fontWeight:'bold',marginTop:10,marginLeft:15}}>9 am to 12 am</Text>
            <Text style={{fontWeight:'bold',marginTop:10,marginLeft:15}} >Expert clinic</Text>

          </Block>
          <Block style={styles.clenderStyle2}>
            <Text style={{fontWeight:'bold',fontSize:17,marginLeft:25,marginTop:5,color:"#5FC1F0"}}>Wednesday</Text>
            <Text style={{fontWeight:'bold',marginTop:10,marginLeft:15}}>12 am to 3 pm</Text>
            <Text style={{fontWeight:'bold',marginTop:10,marginLeft:15}} >Expert clinic</Text>

          </Block>
          <Block style={styles.clenderStyle2}>
            <Text style={{fontWeight:'bold',fontSize:18,marginLeft:25,marginTop:5,color:"#5FC1F0"}}>Thursday</Text>
            <Text style={{fontWeight:'bold',marginTop:10,marginLeft:15}}>12 am to 3 pm</Text>
            <Text style={{fontWeight:'bold',marginTop:10,marginLeft:15}} >Expert clinic</Text>

          </Block>
          <Block style={styles.clenderStyle2}>
            <Text style={{fontWeight:'bold',fontSize:18,marginLeft:35,marginTop:5,color:"#5FC1F0"}}>Friday</Text>
            <Text style={{fontWeight:'bold',marginTop:10,marginLeft:15}}>3 pm to 5 pm</Text>
            <Text style={{fontWeight:'bold',marginTop:10,marginLeft:15}} >Expert clinic</Text>

          </Block>
      </ScrollView>
    </Block>
      <Button onPress={this.submitBookig} color="black" style={styles.buttonStyle} >Confirm appointment</Button>
         
  </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:200
},            
overlay: {
    backgroundColor:'rgba(255,0,0,0.5)',
},
    avatarStyle: {
        width:100, 
        height: 100,
        marginTop: 10,
        borderRadius: 50,
        alignSelf: 'center',
    },
    clenderStyle: {
       backgroundColor:"#F0EEEA",
       width:130,
       height:120,
       borderRadius: 10,
       elevation:10,
       marginTop:10
    },
    clenderStyle2: {
      backgroundColor:"#F0EEEA",
      width:130,
      height:120,
      borderRadius: 10,
      marginLeft:10,
      elevation:10,
      marginTop:10
   },
    balanceContainer:{
        padding:10,
    },

    buttonStyle:{
      width:150, 
      marginLeft:Dimensions.get('window').width/2-75,
      marginTop:10,
     
    },
    timeStyle:{
      fontWeight:'bold',
      fontSize:27,
      marginLeft:40,
      marginTop:15,
      color:"#FBA93A"

    },
    scrollView: {   
      marginHorizontal: 10,
    },
  });

export default Translate;

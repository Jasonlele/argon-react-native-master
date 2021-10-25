import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  Image
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button } from "../components";
import { Images } from "../constants"; 
import { Input } from 'react-native-elements';
import translate from 'translate-google-api';
import * as SQLite from "expo-sqlite";

const { width, height } = Dimensions.get("screen");


class Translate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unTranslateText:"",
      translatedText:"",
      name:props.route.params.jjw,
      link:"testest",

    };
    // let yy = navigation.getParam("jjw"); 

    
 
  }

 // 
  submitBookig=()=>{
    //console.log("输入完成");
    const {name} = this.state;
    




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
    const{unTranslateText,translatedText,name,link} = this.state;

    const db = SQLite.openDatabase("db.DECO3801");
    db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists DoctorImage (id integer primary key not null, nameuse text, imagelink text);"
        );
        
      });
    
    db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists BookingDetail (id integer primary key not null, bookname text, phone text, finish text);"
        );
        
      });

  


      

      db.transaction((tx) => {
                  // console.log(item)
                //   console.log(name)
                  tx.executeSql("select imagelink from DoctorImage where nameuse = ? ", 
                  [name],
                   (_, result) =>{
                   
                    //  console.log(JSON.stringify(result.rows.item(0).date))
                                                                
                    // console.log(JSON.stringify(result.rows.item(0).imagelink))
                    this.setState({ link :result.rows.item(0).imagelink})

                   }
                     
              
                    );
                    
                });



    return (
      <Block flex style={styles.container}>
         <Text>{name}</Text>
         <Text>{link}</Text>
         {/* <Text>{test}</Text> */}
         
         <Image source={{uri:link}} style={{width:200,height:200}} />
         <Button onPress={this.submitBookig}>Confirm appointment</Button>
         
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE
  }
});

export default Translate;

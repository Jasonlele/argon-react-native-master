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
      link:"",

    };
    // let yy = navigation.getParam("jjw"); 

    
 
  }


  beginTranslate = async()=>{
    const result = await translate(this.state.unTranslateText, {
      tld: "cn",
      to: "en",
    });
    console.log(result);
    this.setState({
      translatedText:result[0]
    })
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

    //执行插值操作并打印整个表，每次刷新都会执行，注意不要重复插值
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "INSERT INTO DoctorImage (nameuse, imagelink) VALUES('2021-10-25      Tom      bbb', 'http://81.68.132.232/wp-content/uploads/2021/10/1-300x200.jpg')"
    //   );

    //   tx.executeSql(
    //     "INSERT INTO DoctorImage (nameuse, imagelink) VALUES('2021-10-26      Carlos      ccc', 'http://81.68.132.232/wp-content/uploads/2021/10/2-300x200.jpg')"
    //   );

    //   tx.executeSql("select * from DoctorImage", 
    //   [],
    //    (_, result) =>{
        
    //     console.log(JSON.stringify(result.rows))
          
    //    }
        
    //     );
      
    // });


      

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
         <Image source={{uri:link}} style={{width:200,height:200}} />
         
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

import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  View,
} from "react-native";
import { Block, Text, theme} from "galio-framework";
import { Button } from "../components";
import { Input } from 'react-native-elements';
import translate from 'translate-google-api';
import { Header, Select,Icon } from "../components";
import { HeaderHeight } from "../constants/utils";
import ModalDropdown from 'react-native-modal-dropdown';
import { argonTheme, tabs } from "../constants/";
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import * as SQLite from "expo-sqlite";
const { width, height } = Dimensions.get("screen");


class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        unTranslateText:"",
        translatedText:"",
        link:"testest",
        doctorName:"",
        introduction:"",
        hospital:"",
        date:"",
        time:"",
        firstSearchPageData: ['1'],
    };
  }

  selectType = (index,value) => {
    console.log(index + '--' + value)
    this.setState({
        typeText: value
    })
}

  beginTranslate = async()=>{
    const result = await translate(this.state.unTranslateText, {
      to: "en",
    });
    console.log(result);
    this.setState({
      translatedText:result[0]
    })
  }
//登录框邮箱输入
EmailChangeText=(unTranslateText)=>{
  this.setState({unTranslateText})
}

  render() {
    const { navigation } = this.props;
    const{unTranslateText,translatedText, link,doctorName,hospital,date,time,firstSearchPageData} = this.state;

    const db = SQLite.openDatabase("db.DECO3801");
    db.transaction((tx) => {
        // console.log(item)
      //   console.log(name)
        tx.executeSql("select bookname  from BookingDetail where phone = ? ", 
        [test],
         (_, result) =>{
         
          //  console.log(JSON.stringify(result.rows.item(0).date))
                                                      
        //   console.log(JSON.stringify(result.rows.item(0).imagelink))
          var len = result.rows.length;                      
          let result1=[]
          console.log('result',result);
          for(let i=0; i<len; i++){
              // result1.push(result.rows.item(i).date +"      "+ result.rows.item(i).name +"      "+ result.rows.item(i).hostipal)
              console.log(JSON.stringify(result.rows.item(i).department))
              result1.push(result.rows.item(i).bookname)
          }
          this.setState({firstSearchPageData :result1})
          
          

         }
           
    
          );
          
      });









    return (
      <Block flex style={styles.container}>
        <StatusBar hidden/>

        <Block flex>
        <Header
                    title="Booking History"
                    back
                    optionLeft="Option 1"
                    optionRight="Option 2"
                    style={{marginBottom:2}}
                    navigation={this.props.navigation}
                    titleStyle = {{fontWeight: "bold", fontSize:25, marginLeft:35}} />
        <Block flex  style={styles.card}>
            
        <Button
          iconFamily="antdesign" 
          color="warning" 
          iconColor="#fff" 
          style={{ width: 300, borderRadius:10 }}> 
          <Icon name="history" family="MaterialIcons" color={"#ffffff"} size={50} />
        </Button>
        
        {firstSearchPageData.map((item) => {

              
                        
                return (
                <Block key={item}>

                    
                    <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>

                    {item}
                    </Text>
                
            
                
                </Block>

                )
                })}

        
        </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE
  },
  card:
  {
    width: width * 0.9,
    marginLeft: 20,
    height: height * 1,
    shadowColor: "black",
    marginTop:20,
    marginBottom:50,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    backgroundColor:"rgb(240,248,255)",
    borderWidth: 3,
    borderRadius: 20,
    elevation:20,
  }
});

export default History;

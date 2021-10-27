import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Alert,
  TextInput,
  View,
} from "react-native";
import { Block, Checkbox, Text} from "galio-framework";
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import validator from "../constants/validator";
import * as SQLite from "expo-sqlite";
import RNPasswordStrengthMeter, {
  BarPasswordStrengthDisplay,
  BoxPasswordStrengthDisplay,
  CircularPasswordStrengthDisplay,
  TextPasswordStrengthDisplay,
} from 'react-native-password-strength-meter';


const { width, height } = Dimensions.get("screen");

const createOneButtonAlert = () =>{
  

//   const db = SQLite.openDatabase("db.DECO3801");

//  //创建users表
//   db.transaction((tx) => {
//     tx.executeSql(
//       "create table if not exists Users (id integer primary key not null, phone text, password text, username text);"
//     );
    
//   });


// // 执行插值操作并打印整个表，每次刷新都会执行，注意不要重复插值
//  db.transaction((tx) => {
//    tx.executeSql(
//      "INSERT INTO Users (phone, password, username) VALUES(?,?,?)",
//      [],
//      (_, result) =>{
      
//       console.log(JSON.stringify(result.rows))
     
      
//    }


//    );
   
//  });

//   Alert.alert(
//     "Complete",
//     "Congradulation, account has been created !",
//     [
//       { text: "OK", onPress: () => console.log("OK Pressed") }
//     ],
//     { cancelable: false }
// );


}

  
class Register extends React.Component {

  onChange = password => this.setState({ password })
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      phone:"",
      password:"",
      phoneValid:true,
      loginValid:true,
      loginMessage:"",
      isReapt:true,
      
    };
   

  }

    //登录框邮箱输入
    EmailChangeText=(phone)=>{
      this.setState({phone})
  
    }
    //账号输入点击完成
    EmailonSubmitEditing=()=>{
      //console.log("输入完成");
      const {phone} = this.state;
      const phoneValid=validator.ValidatePhone(phone);
      if(!phoneValid){
          //没通过
          this.setState({phoneValid});
          this.setState({loginMessage:"invalid number"})
          
      }else{
          //通过
          this.setState({phoneValid});
          this.setState({loginMessage:"valid number"})
      }
  
    }

    //密码输入中
     PasswordChangeText=(password)=>{
    this.setState({password})

    }

    //姓名输入中
    NameChangeText=(name)=>{
      this.setState({name})
    }



    // 邮箱密码输入完成
  PasswordsubmitEditing=()=>{
    const {phone} = this.state;
    const{password} = this.state;
    const{name} = this.state;
    const{isReapt} = this.state;
    const { navigation } = this.props;
    const phoneValid=validator.ValidatePhone(phone);
    if(!phoneValid){
      //手机号无效
      Alert.alert(
        "invalid",
        "Invalid mobile phone number !",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
    );

    }else{
      //手机号有效,执行插值操作
      const db = SQLite.openDatabase("db.DECO3801");

      db.transaction((tx) => {
    
        tx.executeSql("select * from Users where phone = ?", 
        [phone],
        (_, result) =>{
          var len = result.rows.length;
          
          if(len>0){
         
            alert("This number is already registered")
             
          } else{

            console.log(JSON.stringify(result.rows))
            this.setState({isReapt:false})
            
        db.transaction((tx) => {
            
          tx.executeSql("INSERT INTO Users (phone, password, username) VALUES(?,?,?) ", 
          [phone,password,name],
          
            
            );
            
        });

        Alert.alert(
          "congratulate",
          "Welcome to join us! ! !",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
          }
          
       }
    
          );
          
      });
      
      //检测是否重复注册手机号
      // if(isReapt){


      //   db.transaction((tx) => {
            
      //     tx.executeSql("INSERT INTO Users (phone, password, username) VALUES(?,?,?) ", 
      //     [phone,password,name],
          
            
      //       );
            
      //   });

      //   Alert.alert(
      //     "congratulate",
      //     "Welcome to join us! ! !",
      //     [
      //       { text: "OK", onPress: () => console.log("OK Pressed") }
      //     ],
      //     { cancelable: false }
      //   );
      // }else{

      //     alert("This number is already registered")
      // }
    

   
  }


  }

  render() {

    const{phone,password,loginMessage,phoneValid,name} = this.state;

    const db = SQLite.openDatabase("db.DECO3801");
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists Users (id integer primary key not null, phone text, password text, username text);"
      );
      
    });
    return (
      <Block flex middle>
        <StatusBar hidden />

          <Block safe flex middle>
            <Block style={styles.registerContainer}>
             
              <Block flex>
                <Block flex={0.17} middle>
                  <Text  style ={{fontWeight:'bold', fontFamily: 'serif'}} size={30} >
                    Sign Up
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Name"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }

                        value={name}
                        onChangeText={this.NameChangeText}
                 
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Phone Number"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="smartphone"
                            family="FontAwesome"
                            style={styles.inputIcons}
                          />
                        }

                        value={phone}
                        onChangeText={this.EmailChangeText}
                        onSubmitEditing={this.EmailonSubmitEditing}
                      />
                    </Block>
              
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        onChangeText={this.onChange}
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="key"
                            family="font-awesome-5"
                            style={styles.inputIcons}
                          />
                        }

                        value={password}
                        onChangeText={this.PasswordChangeText}
                      />
                      <BarPasswordStrengthDisplay
                        password={password}
                        width = {width * 0.75}
                        minLength = {6}
                      />
                      {/* <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          password strength:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          strong
                        </Text>
                      
                      </Block> */}
                    </Block>
                    <Block row width={width * 0.75} style = {{marginLeft: width * 0.05}}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
                    </Block>
                    <Block middle>
                      <Button onPress={this.PasswordsubmitEditing} color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          CREATE ACCOUNT
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
       
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
      height: height * 0.85,
      padding:6,
      width: width * 0.85,
      marginLeft: width * 0.01,
      shadowColor: "black",
      marginTop:width * 0.05,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 8,
      shadowOpacity: 0.2,
      backgroundColor:"rgb(240,248,255)",
      borderWidth: 3,
      borderRadius: 20,
      elevation:20,
    
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Register;
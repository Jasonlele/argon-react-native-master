import React from "react";
import {
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button } from "../components";
import { Input } from 'react-native-elements';
import validator from "../constants/validator";
import login from "../constants/login";
import * as SQLite from "expo-sqlite";
const { width, height } = Dimensions.get("screen");


class Onboarding extends React.Component {
  // state={
  //   Email:"",
  //   phoneValid:true,
  //   Password:"",
  //   loginValid:true,
  //   myName:'I am MyName!',
  // }
  constructor(props) {
    super(props);
    this.state = {
      Email:"",
      phoneValid:true,
      Password:"",
      loginValid:true,
      loginMessage:"",
      Username:""
    };
    db = SQLite.openDatabase("db.DECO3801");

  }


  
  //登录框邮箱输入
  EmailChangeText=(Email)=>{
    this.setState({Email})

  }

  //账号输入点击完成
  EmailonSubmitEditing=()=>{
    //console.log("输入完成");
    const {Email} = this.state;
    const phoneValid=validator.ValidatePhone(Email);
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
  PasswordChangeText=(Password)=>{
    this.setState({Password})

  }
  // 邮箱密码输入完成
  PasswordsubmitEditing=()=>{
    const {Email,Username} = this.state;
    global.test = Email;
    // global.testyyf = Username;
    const{Password} = this.state;
    const loginValid =login.ValidateLogin(Email,Password);
    const { navigation } = this.props;
    const db = SQLite.openDatabase("db.DECO3801");
  //   if(!loginValid){
  //     //没通过
  //     this.setState({loginValid});
  //     alert("Wrong account or password")
      
  // }else{
  //   navigation.navigate("App")
  // }
  db.transaction((tx) => {
    
    tx.executeSql("select * from Users where phone = ? and password = ? ", 
    [Email, Password],
     (_, result) =>{
        var len = result.rows.length;
        console.log(JSON.stringify(result.rows))
        if(len>0){
          console.log(JSON.stringify(result.rows))
          //????
           
        } else{
          alert("Wrong account or password")
        }     
     }
       

      );

      tx.executeSql("select username from Users where phone = ? and password = ? ", 
      [Email, Password],
       (_, result) =>{
          var len = result.rows.length;
          if(len>0){
            console.log(JSON.stringify( result.rows.item(0).username))
            //????
            this.setState({Username:result.rows.item(0).username})
            navigation.navigate("App")
          }        
       }
        );
      
  });

  }

  render() {
    const { navigation } = this.props;
    const{Email,phoneValid,Password,loginMessage,Username} = this.state;


    global.testyyf = Username;
    const db = SQLite.openDatabase("db.DECO3801");

    
     //删除表，请一定要注释
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "DROP TABLE Users;"
    //   );
    //   // console.log(JSON.stringify(db))
    
    // });


    //创建users表
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists Users (id integer primary key not null, phone text, password text, username text);"
      );
      
    });


   // 执行插值操作并打印整个表，每次刷新都会执行，注意不要重复插值
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "INSERT INTO Users (phone, password, username) VALUES('111','12345','yyf')"
    //   );

    //   tx.executeSql(
    //     "INSERT INTO Users (phone, password, username) VALUES('222','12345', 'wxj')"
    //   );

    //   tx.executeSql("select * from Users", 
    //   [],
    //    (_, result) =>{
        
    //     console.log(JSON.stringify(result.rows))
          
    //    }
        
    //     );
      
    // });





    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        </Block>
        <Block center>
          <Image source={require("../assets/imgs/NewLogo.png")} style={styles.logo} />
          <Text style = {{fontSize: 35, fontWeight: "bold", marginTop: 10}}>MediHelper</Text>
        </Block>
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 10 }}>
              
              <Block>
                     <Input                      
                        placeholder="Phone Nummber"
                        leftIcon={{type:'FontAwesome', name:'smartphone',color:"#ccc",size:25,marginTop:20}}
                        maxLength={11}
                        keyboardType="phone-pad"
                        value={Email}
                        onChangeText={this.EmailChangeText}
                        onSubmitEditing={this.EmailonSubmitEditing}
                        inputStyle={{color:"#333"}}
                        style={{marginTop:30}}
                      />
                      <Text style={phoneValid ? {color:"green",marginLeft:10,fontSize:15} :{color:"red",marginLeft:10,fontSize:15} }>
                          {loginMessage}
                      </Text>
                      <Input
                        password
                        // borderless
                        placeholder="Password"
                        leftIcon={{ type: 'font-awesome-5', name: 'key' ,color:"#ccc" ,size:21,marginTop:10,marginLeft:5,}}
                        style={{marginTop:10}}
                        value={Password}
                        onChangeText={this.PasswordChangeText}
                      />
                
                        <Text style={{marginLeft:180,marginBottom:30, fontSize:16}}>
                          Forgot password
                        </Text>        
                  </Block> 
              <Block center>
                <Button
                  onPress={this.PasswordsubmitEditing}
                >
                  <Text style = {styles.buttonText}>LOGIN IN</Text>
                  
                </Button>
                
                <Button
                  onPress={() => navigation.navigate('Pro')}
                >
                  <Text style = {styles.buttonText}>SIGN IN</Text>
                </Button>

              </Block>
              <Block style={{flexDirection: 'row',marginLeft:35,marginTop:30}}>
                <Text style={{fontSize:20,fontWeight:'bold',marginLeft:20,marginTop:14}}>Setting Language :</Text>
                <Button 
                onlyIcon icon="tags" 
                iconFamily="antdesign" 
                iconSize={30} 
                color="warning" 
                iconColor="#fff" 
                style={{ width: 40, height: 40 }}>warning
                </Button>
              </Block>
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
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
    marginBottom: 40
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 325,
    height: 300,
    zIndex: 2,
    position: 'relative',
    marginTop: '-100%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20
  }
});

export default Onboarding;
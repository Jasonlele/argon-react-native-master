import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Alert,
  

} from "react-native";
import { Block, Checkbox, Text, theme,DeckSwiper } from "galio-framework";

import { Button } from "../components";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import { Images, argonTheme } from "../constants";
import validator from "../constants/validator";
import login from "../constants/login";

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
      
    };
 
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
    const {Email} = this.state;
    const{Password} = this.state;
    const loginValid =login.ValidateLogin(Email,Password);
    const { navigation } = this.props;
    if(!loginValid){
      //没通过
      this.setState({loginValid});
      alert("Wrong account or password")
      
  }else{
    navigation.navigate("App")
  }

  }


  render() {
    const { navigation } = this.props;
    const{Email,phoneValid,Password,loginMessage} = this.state;
    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        {/* <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          /> */}
        </Block>
        <Block center>
          <Image source={require("../assets/imgs/NewLogo.png")} style={styles.logo} />
        </Block>
        <Block flex space="between" style={styles.padded}>
            <Block flex space="around" style={{ zIndex: 10 }}>

              <Block>
                     <Input
                        
                        // borderless
                        
                        placeholder="  Phone Nummber"
                        leftIcon={{type:'font-awesome', name:'phone',color:"#ccc",size:25,marginTop:20}}
                        maxLength={11}
                        keyboardType="phone-pad"
                        value={Email}
                        onChangeText={this.EmailChangeText}
                        //errorMessage={phoneValid ? "":"Invalid mobile phone number"}
                       
                        // style={{marginb:20}}
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
                        placeholder="  Password"
                        leftIcon={{ type: 'font-awesome-5', name: 'key' ,color:"#ccc" ,size:21,marginTop:20}}
                        style={{marginTop:30}}
                        value={Password}
                        onChangeText={this.PasswordChangeText}
                       // onSubmitEditing={this.PasswordsubmitEditing}
                        // errorMessage={loginValid ? "":"Invalid mobile phone number"}
                        // errorMessage={loginValid ? "":"Invalid  password number"}
                        //errorMessage={loginValid ? "":"Wrong Account or password "}
                      />
                   


                        <Text style={{marginLeft:180,marginBottom:40}}>
                          Forgot password</Text>
                         
                         

                         
                  </Block> 
              <Block center >
                <Button
                //  onPress={this.testFun.bind(this)}  
                  //onPress={() => navigation.navigate("App")}
                  onPress={this.PasswordsubmitEditing}
                  
                >
                  LOGIN IN
                </Button>
                
                <Button
                 
                 onPress={() => navigation.navigate('Pro')}
                  
                >
                  Register
                </Button>


              </Block>
              <Block style={{flexDirection: 'row',marginLeft:20,marginTop:20}}>
                <Text style={{fontSize:20,fontWeight:'bold',marginLeft:20,marginTop:14}}>Setting Language :</Text>
                <Button onlyIcon icon="tags" iconFamily="antdesign" iconSize={30} color="warning" iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>
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
    width: 350,
    height: 325,
    zIndex: 2,
    position: 'relative',
    marginTop: '-100%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  }
});

export default Onboarding;

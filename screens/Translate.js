import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button } from "../components";
import { Images } from "../constants"; 
import { Input } from 'react-native-elements';
import translate from 'translate-google-api';

const { width, height } = Dimensions.get("screen");


class Translate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unTranslateText:"",
      translatedText:"",
    };
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
//登录框邮箱输入
EmailChangeText=(unTranslateText)=>{
  this.setState({unTranslateText})

}

  render() {
    const { navigation } = this.props;
    const{unTranslateText,translatedText} = this.state;
    return (
      <Block flex style={styles.container}>
        <StatusBar hidden/>
        <ImageBackground
            source={Images.RegisterBackground}
            style={{ width, height, zIndex: 1 }}
          >
        <Block flex middle>

        <Text style = {{fontSize:33, color: "#FFFFFF"}}>Real-Time Translate</Text>
        <Input style={{marginTop:100, fontSize:25, color:"#FFFFFF"}}  onChangeText={this.EmailChangeText} value={unTranslateText} placeholder="please input some words" />
        <Input style={{marginTop:100, fontSize:25, color:"#FFFFFF"}} value={translatedText} />
        <Text style = {{fontSize:25, color: "#FFFFFF", marginTop: 30}}>Chinese to English</Text>
        <Button 
          onPress={this.beginTranslate}
          iconFamily="antdesign" 
          color="warning" 
          iconColor="#fff" 
          style={{ width: 120, height: 50,marginTop:30 }}> 
          <Text style = {{fontSize:25, color: "#FFFFFF"}}>Translate</Text>
        </Button>
        </Block>
        </ImageBackground>
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

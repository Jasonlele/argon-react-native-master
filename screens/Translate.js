import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button } from "../components";
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
        <StatusBar hidden />
    
        <Input style={{marginTop:100}}  onChangeText={this.EmailChangeText} value={unTranslateText} placeholder="please input some words" />
        <Input style={{marginTop:100}} value={translatedText} />
        <Text>Chinese to English</Text>
        <Button 
                 onPress={this.beginTranslate}
                iconFamily="antdesign" 
                color="warning" 
                iconColor="#fff" 
                style={{ width: 50, height: 40 }}> start
                </Button>
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

export default Translate;

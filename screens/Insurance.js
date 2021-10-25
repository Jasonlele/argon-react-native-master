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
import { Header} from "../components";
import { HeaderHeight } from "../constants/utils";
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

        <Block flex>
        <Header
                    title="Realtime Translate"
                    back
                    optionLeft="Option 1"
                    optionRight="Option 2"
                    style={{marginBottom:2}}
                    navigation={this.props.navigation}
                    titleStyle = {{fontWeight: "bold", fontSize:25, marginLeft:35}} />
        <Block flex middle>
        <Text style = {{fontSize:33, color: "#000000"}}>Real-Time Translate</Text>
        <Input style={{marginTop:100, fontSize:25, color:"#000000"}}  onChangeText={this.EmailChangeText} value={unTranslateText} placeholder="please input some words" />
        <Input style={{marginTop:100, fontSize:25, color:"#000000"}} value={translatedText} />
        <Text style = {{fontSize:25, color: "#000000", marginTop: 30}}>Chinese to English</Text>
        <Button 
          onPress={this.beginTranslate}
          iconFamily="antdesign" 
          color="warning" 
          iconColor="#fff" 
          style={{ width: 120, height: 50,marginTop:30 }}> 
          <Text style = {{fontSize:25, color: "#000000"}}>Translate</Text>
        </Button>
        </Block>
        </Block>
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

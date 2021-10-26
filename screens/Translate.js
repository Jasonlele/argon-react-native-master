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
const { width, height } = Dimensions.get("screen");

class Translate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      motherLanguage:"",
      unTranslateText:"",
      translatedText:"",
      motherLanguageOptions:['中文', '한어', "しろうと", "Deutsch", "français", "русский язык", "español"]
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
        <Block flex middle style={styles.card}>
        
        <Text style = {{fontSize:40, color: "#000000", fontWeight:"bold"}}>Translate</Text>
        <ModalDropdown defaultValue="Click Here" 
        dropdownStyle= {{marginLeft:0}} 
        dropdownTextStyle={{fontSize:30}} 
        textStyle={{fontSize:30, fontWeight:"bold", marginTop: 20,}} 
        options={this.state.motherLanguageOptions}
        onSelect = {(value) => this.setState({motherLanguage:(String(this.state.motherLanguageOptions[value]))})}
        />
          
      
        <Input style={{marginTop:40, fontSize:25, color:"#000000", borderRadius: 4,
              backgroundColor: "#F8F8FF", borderColor:"#ffffff"}}  
        onChangeText={this.EmailChangeText} 
        value={unTranslateText} 
        placeholder="Please input words" 
        />
        <Text>{this.translateLanguage}</Text>
        <Input style={{marginTop:20, fontSize:25, color:"#000000", borderRadius: 4,
              backgroundColor: "#F8F8FF", borderColor:"#ffffff"}} value={translatedText} />
        <Text style = {{fontSize:25, color: "#000000", marginTop: 10}}>{this.state.motherLanguage} to English</Text>
        <Button 
          onPress={this.beginTranslate}
          iconFamily="antdesign" 
          color="warning" 
          iconColor="#fff" 
          style={{ width: 120, height: 50,marginTop:20 }}> 
          <Icon name="g-translate" family="MaterialIcons" color={"#ffffff"} size={50} />
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
  },
  card:
  {
    width: width * 0.8,
    marginLeft: 40,
    height: height * 0.8,
    shadowColor: "black",
    marginTop:80,
    marginBottom:120,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    backgroundColor:"rgb(240,248,255)",
    borderWidth: 3,
    borderRadius: 20,
    elevation:20,
  }
});

export default Translate;

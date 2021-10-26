  
import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  View,
  ScrollView,
} from "react-native";
import { SearchBar } from 'react-native-elements';
import {  Icon, Input, argonTheme  } from "../components";
import { NavBar, Block, Text, theme, Button, DeckSwiper, Radio } from "galio-framework";
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import { ListItem } from 'react-native-material-ui';
import * as SQLite from "expo-sqlite";
import { Header} from "../components";
import { block, color } from "react-native-reanimated";
const { width, height } = Dimensions.get("screen");
const labels = ["Choose a\n symptom", "Select\n related\nfactors", "View\n possible\n causes"];

// import { useDbContext } from "../hooks/useDb"
const customStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}


const cold = ["Stuffed nose", "Runny nose", "Fever"]
const Gastroenteritis = ["Diarrhea", "Vomiting", "Abdominal pain"]
const Hypoglycemia = ["Hungry", "Sweating", "Feeling weak"]
const Asthma = ["Hungry", "Chest tightness", "Chest tightness","Difficulty breathing"]
const Rhinitis = ["Runny nose", "Stuffy nose", "Sneezing", "Allergies"]
const Pharyngitis = ["Sore throat", "Fever"]
const Gastritis = ["Nausea", "Vomiting", "Abdominal Distension","Loss of appetite", "Heartburn"]
const Pneumonia = ["Hungry", "Sweating", "Feeling weak"]
const Nephritis = ["Hematuria", "Proteinuria", "Edema", "High blood pressure"]
const Diabetes = ["Polyphagia", "Polydipsia", "Frequent urination",  "Weight loss"]
const Meningitis = ["Fever", "Headache", "Stiff neck"]
const Prostatitis = ["High fever", "Frequent urination", "Urgency", "Painful urination"]
const Dermatitis = ["Itching", "Red skin","Rash"]
const Conjunctivitis = ["Red eyes", "Pain", "Burning", "Itching"]
const Foodpoisoning =["Abdominal pain", "Vomiting", "Diarrhea"]
const PAGES = ['Page 1', 'Page 2', 'Page 3'];


function unique(arr) {
  if (!Array.isArray(arr)) {
      console.log('type error!')
      return
  }
  let res = []
  for (let i = 0; i < arr.length; i++) {
      if (res.indexOf(arr[i]) === -1) {
          res.push(arr[i])
      }
  }
  return res
}
const swipeRef = React.createRef(null);
class SympotomChecker extends React.Component {
  
  constructor(props) {
    super(props);
   const allItem =  unique(cold.concat([
      ...Gastroenteritis,...Hypoglycemia,
      ...Asthma,...Rhinitis,...Pharyngitis,...Gastritis,...Pneumonia,...Nephritis,...Diabetes,...Meningitis,...Prostatitis,...Dermatitis,...Conjunctivitis,...
      Foodpoisoning
   ]))
    this.state = {
      result:[],
      firsrPageSelected:'',
      secondPageSelected:'',
      allItem:allItem,
      currentPosition: 0,
      pageIndex:0,
      adultInitialValue: true,
      childInitialValue: false,
      search: '',
      firstPageData: allItem,
      firstSearchPageData: allItem,
      secondPageData1: ["please choose the symptom"],
      secondSearchPageData: [],
      thirdPageData: ["please choose the symptom and factor"],
      //第一次检索的症状名字
      symptomCheck:'',
    };
  }

  
  onPageChange(position) {
    this.setState({ currentPosition: position });
  }
  nextStep() {
    // this.onPageChange(this.state.currentPosition + 1)
    alert("text")
  }

  updateSearch = search => {
    this.setState({ search });
    this.setState({
      firstSearchPageData:this.state.firstPageData.filter(item=>item.indexOf(search) >-1)
    })  
  };
  

   clickButton = (item)=>{
     this.setState({firsrPageSelected:item})
     swipeRef.current?.scrollBy(1); // go forward one page
  }
  secondClickButton = (item)=>{
    this.setState({secondPageSelected:item})
    let judge = [cold,Gastroenteritis,Hypoglycemia,
      Asthma,Rhinitis,Pharyngitis,Gastritis,Pneumonia,Nephritis,Diabetes,Meningitis,Prostatitis,Dermatitis,Conjunctivitis,
      Foodpoisoning]
      const name = ["cold","Gastroenteritis","Hypoglycemia",
      "Asthma","Rhinitis","Pharyngitis","Gastritis","Pneumonia","Nephritis","Diabetes","Meningitis","Prostatitis","Dermatitis","Conjunctivitis",
      "Foodpoisoning"]
      let tmp = []
      for (let index = 0; index < judge.length; index++) {
        const element = judge[index];
        if(element.includes(this.state.firsrPageSelected) && element.includes(item)){
          tmp.push(name[index])
        }
        
      }
      this.setState({result:tmp})
      swipeRef.current?.scrollBy(2); // go forward one page
 }
  render() {
    const {symptomCheck,currentPosition} = this.state;
    const db = SQLite.openDatabase("db.DECO3801");
     //删除表，请一定要注释
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "DROP TABLE Sympotom;"
    //   );
    //   // console.log(JSON.stringify(db))
    
    // });


    //创建表
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists Sympotom (id integer primary key not null, symptomName text, factor text, causes text);"
      );
      
    });


   // 执行插值操作并打印整个表，每次刷新都会执行，注意不要重复插值
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "INSERT INTO Sympotom (symptomName, factor, causes) VALUES('Abdominal pain','Vomit','Gastroenteritis')"
    //   );

    //   tx.executeSql(
    //     "INSERT INTO Sympotom (symptomName, factor, causes) VALUES('Blood in stool','Burning', 'enteritis')"
    //   );

    //     tx.executeSql(
    //     "INSERT INTO Sympotom (symptomName, factor, causes) VALUES('Abdominal pain','Burning', 'appendicitis')"
    //   );

    //   tx.executeSql("select * from Sympotom", 
    //   [],
    //    (_, result) =>{
        
    //     console.log(JSON.stringify(result.rows))
          
    //    }
        
    //     );
      
    // });

  
    return (

      
      <Block flex style={styles.container}>
        <Header
          title="Sympotom Checker"
          back
          optionLeft="Option 1"
          optionRight="Option 2"
          style={{marginBottom:2}}
          navigation={this.props.navigation}
          titleStyle = {{fontWeight: "bold", fontSize:22, marginLeft:35}} />
        


      
        <Block  style={styles.card}>
        <Block style={{marginTop:10}}>
        <StepIndicator
          stepCount={3}
          customStyles={customStyles}
          currentPosition={this.state.currentPosition}
          labels={labels}
        />



        </Block>
        
    
        <Block>
          <SearchBar
            
            lightTheme={true}
            placeholder="Type Here to Search..." onChangeText={this.updateSearch} value={this.state.search}
          />
        </Block>
        <Swiper
           ref={swipeRef}
          style={{ flexGrow: 1 }}
          loop={false}
          index={this.state.pageIndex}
          autoplay={false}
          onIndexChanged={(page) => {
            // swiper.current.scrollTo(page);
            this.setState({ currentPosition: page});
          }}
        >
          <View key={"page1"}>
          <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
            <Block  style={{backgroundColor:"#D9E6F7", flexDirection: 'row', flexWrap: 'wrap'}}>
              {this.state.firstSearchPageData.map((item) => {
                return (
                
                <Button
                 key={item}
                //   divider
                //   centerElement={{
                //     primaryText: item,
                //   }}
                color="warning"

                style={{marginLeft:6,width:width * 0.39,alignItems:'center',textAlign:'center'}}
                // size="large"
                  onPress={this.clickButton.bind(this,item)}
                
                >
                  {item}
                  </Button>   
                
                )
              })}
            </Block>
            </ScrollView>
          </View>
          <View key={"page2"}>
          <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
            <Block  style={{backgroundColor:"#D9E6F7", flexDirection: 'row',flexWrap: 'wrap'}}>
              {this.state.firstSearchPageData.map((item) => {
                return (
                
                <Button
                 key={item}
                //   divider
                //   centerElement={{
                //     primaryText: item,
                //   }}
                disabled={item==this.state.firsrPageSelected}
                color={item==this.state.firsrPageSelected ? "success":"warning"}
                style={{marginLeft:6,width:width * 0.39}}
                onPress={this.secondClickButton.bind(this,item)}
                // size="large"
                >
                  {item}
                  </Button>   
                
                )
              })}
            </Block>
            </ScrollView>
          </View>
          <View key={"page3"} style={{backgroundColor:"#D9E6F7", height:height * 0.2}}>
            <Block flex middle>
          {this.state.result.length>0 ? this.state.result.map((item) => {
                return (
                
                <Button

                size="large"
                color="success"
                key={item}
        
                  onPress={() => { 
                  }}
                >
                  {item}
                  </Button>
                
                
                
                )
              }) : 
              <Button

              size= "large"
              color="rgb(240,248,255)"
                onPress={() => { 
                }}
              >
               <Text>Please find a doctor for advice</Text>
                </Button>}
                <Button

            size="large" 
            color="danger"
              onPress={() => {
                const { navigation } = this.props;
                navigation.navigate("Booking")
              }}
            >
                                
                      <Icon name="trello" family="Feather" color={"#ffffff"} size={23} />
                      <Text bold size={14} color="white">
                          Booking now
                      </Text>
                    
              </Button>
              </Block>
          </View>
        </Swiper>
                </Block>
      </Block>
    );
  }
}



const styles = StyleSheet.create({
  card:
  {
    padding:6,
    width: width * 0.9,
    marginLeft: width * 0.05,
    height: height * 0.8,
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
  container: {
    backgroundColor: theme.COLORS.WHITE
  },
  radio: {
  },
  page: {

  }
});

export default SympotomChecker;

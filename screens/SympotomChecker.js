import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  View
} from "react-native";
import { SearchBar } from 'react-native-elements';
import { NavBar, Block, Text, theme, Button, DeckSwiper, Radio } from "galio-framework";
import StepIndicator from 'react-native-step-indicator';
import Swiper from 'react-native-swiper';
import { ListItem } from 'react-native-material-ui';
import * as SQLite from "expo-sqlite";
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

const PAGES = ['Page 1', 'Page 2', 'Page 3'];

class SympotomChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      adultInitialValue: true,
      childInitialValue: false,
      search: '',
      firstPageData: ["Abdominal pain", "Blood in stool", "Chest pain"],
      firstSearchPageData: ["Abdominal pain", "Blood in stool", "Chest pain"],
      secondPageData1: ["please choose the symptom"],
      secondSearchPageData: ["please choose the symptom"],
      thirdPageData: ["please choose the symptom and factor"],
      //第一次检索的症状名字
      symptomCheck:'',
    };
  }

  
  onPageChange(position) {
    this.setState({ currentPosition: position });
  }
  nextStep() {
    this.onPageChange(this.state.currentPosition + 1)
  }

  updateSearch = search => {
    this.setState({ search });
    this.setState({
      firstSearchPageData:this.state.firstPageData.filter(item=>item.indexOf(search) >-1)
    })  
  };
  

  render() {
    const {symptomCheck} = this.state;
    const db = SQLite.openDatabase("db.DECO3801");
     //删除表，请一定要注释
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "DROP TABLE Users;"
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
    db.transaction((tx) => {
      // tx.executeSql(
      //   "INSERT INTO Sympotom (symptomName, factor, causes) VALUES('Abdominal pain','Vomit','Gastroenteritis')"
      // );

      // tx.executeSql(
      //   "INSERT INTO Sympotom (symptomName, factor, causes) VALUES('Blood in stool','Burning', 'enteritis')"
      // );

      // tx.executeSql("select * from Sympotom", 
      // [],
      //  (_, result) =>{
        
      //   console.log(JSON.stringify(result.rows))
          
      //  }
        
      //   );
      
    });

    return (
      <Block flex style={styles.container}>
        <StepIndicator
          stepCount={3}
          customStyles={customStyles}
          currentPosition={this.state.currentPosition}
          labels={labels}
        />
        <Block style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <Radio style={styles.radio} label="Adult Symptom" containerStyle={{ backgroundColor: "#B0C4DE", marginRight: 10 }} labelStyle={{ color: 'black' }} initialValue={this.state.adultInitialValue} name='a' color="primary" />
          <Radio style={styles.radio} label="Child Symptom" containerStyle={{ backgroundColor: "#B0C4DE" }} labelStyle={{ color: 'black' }} initialValue={this.state.childInitialValue} name='a' color="info" />
        </Block>

        <SearchBar
          lightTheme={true}
          placeholder="Type Here to Search..." onChangeText={this.updateSearch} value={this.state.search}
        />
        <Swiper
          style={{ flexGrow: 1 }}
          loop={false}
          index={this.state.currentPosition}
          autoplay={false}
          onIndexChanged={(page) => {
            this.setState({ currentPosition: page });
          }}
        >
          <View key={"page1"} style={styles.page}>
            <Block  >
              {this.state.firstSearchPageData.map((item) => {
                return (<ListItem
                key={item}
                  divider
                  centerElement={{
                    primaryText: item,
                  }}
                  onPress={() => { 

                    // this.setState({secondSearchPageData :['aaaa',item]})

                    db.transaction((tx) => {
    
                      tx.executeSql("select factor from Sympotom where symptomName = ?", 
                      [item],
                       (_, result) =>{
                          var len = result.rows.length;
                          

                          let result1=[]
                          for(let i=0; i<len; i++){
                              result1.push(result.rows.item(i).factor)
                              console.log(JSON.stringify(result.rows.item(i).factor))

                          }
                          this.setState({secondSearchPageData :result1})

                          //将这个变量设置为第一次选择的症状
                          this.setState({symptomCheck:item})
                          
                       }
                         
                  
                        );
                        
                    });


                  }}
                />)
              })}

            </Block>
          </View>
          <View key={"page2"} style={styles.page}>
          {this.state.secondSearchPageData.map((item) => {
                return (<ListItem
                key={item}
                  divider
                  centerElement={{
                    primaryText: item,
                  }}
                  onPress={() => { 
                    // alert(item)
                    db.transaction((tx) => {
    
                      tx.executeSql("select causes from Sympotom where symptomName = ? and factor = ?", 
                      [symptomCheck,item],
                       (_, result) =>{
                          var len = result.rows.length;
                        
                          let result2=[]
                          for(let i=0; i<len; i++){
                              result2.push(result.rows.item(i).causes)
                              console.log(JSON.stringify(result.rows.item(i).causes))

                          }
                          this.setState({ thirdPageData :result2})

                    
                          
                       }
                         
                  
                        );
                        
                    });

                  }}
                />)
              })}
            {/* <Text>{symptomCheck}</Text> */}
          </View>
          <View key={"page3"} style={styles.page}>
          {this.state.thirdPageData.map((item) => {
                return (<ListItem
                key={item}
                  divider
                  centerElement={{
                    primaryText: item,
                  }}
                  onPress={() => { 
                    alert(item)
                  }}
                />)
              })}
          </View>
        </Swiper>

      </Block>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE
  },
  radio: {
  },
  page: {

  }
});

export default SympotomChecker;

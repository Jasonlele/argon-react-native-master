import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
  Alert,
  Image
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"
import { Block, Text} from "galio-framework";
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import MapView from 'react-native-maps';
import * as SQLite from "expo-sqlite";
import { Header} from "../components";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");
const createOneButtonAlert = () =>
  Alert.alert(
    "Complete",
    "Reservation completed",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
);

var data = require('../assets/map/stations.json');
for(var i = 0; i < data.length; i++) {
  var obj = data[i];
  }

class Booking extends React.Component {
  // state={
  //   obj:{
  //       bookDay:"",
  //       bookTime:"",  //预约
  //   },
  //   date:new Date(),//给日期控件用
  //   mode:"date",
  //   show:false //是否显示时间控件
  // }

  constructor(props) {
    super(props);
    this.state = {
      obj:{
        bookDay:"",
        bookTime:"",  //预约
    },
    date:new Date(),//给日期控件用
    mode:"date",
    show:false, //是否显示时间控件
    link:"",
    dateUse:"",
    firstSearchPageData: [],
    isLoading: true,
      markers: data,
    };
  }

  handleDateChange = (event,date) => {
    //这是设置日期,即确认按钮
    if(event.type === "set"){
        const bookDay = this.dateToString(date)
        let obj = this.state.obj
        obj.bookDay = bookDay
        this.setState({obj,date,show:false})
    }else{
        //这是点击取消按钮
        this.setState({show:false})
    }
   
  }

  handleTimeChange = (event,date) => {
    //这是设置时间,即确认按钮
    if(event.type === "set"){
        const bookTime = this.timeToString(date)
        let obj = this.state.obj
        obj.bookTime = bookTime
        this.setState({obj,date,show:false})
    }else{
        //这是点击取消按钮
        this.setState({show:false})
    }
  }
  //时间转字符串的函数
  timeToString = (date) => {
    const {firstSearchPageData,dateUse} = this.state;
    var hour =  date.getHours().toString();
    var minute = date.getMinutes().toString();
    if (hour.length == 1) {
      hour = "0" + hour;
    }
    if (minute.length == 1) {
        minute = "0" + minute;
    }
    var timeDate = hour+ ":" + minute;
    
    return timeDate;
  }

  //日期转字符串的函数
  dateToString = (date) => {
    
    var year = date.getFullYear();
    var month =(date.getMonth() + 1).toString();
    var day = (date.getDate()).toString();
    if (day.length == 1) {
        day = "0" + day;
    }
    if (month.length == 1) {
        month = "0" + month;
    }
    var dateTime = year + "-" + month + "-" + day;
    // console.log("aaa")
    
     db.transaction((tx) => {
      // console.log("bbb")
                      tx.executeSql("select name, hostipal, date from Doctor where date = ?", 
                      [dateTime],
                       (_, result) =>{
                          var len = result.rows.length;                      
                          let result1=[]
                          for(let i=0; i<len; i++){
                              // result1.push(result.rows.item(i).date +"      "+ result.rows.item(i).name +"      "+ result.rows.item(i).hostipal)
                              // console.log(JSON.stringify(result.rows.item(i).date))
                              result1.push(result.rows.item(i).date +"      "+ result.rows.item(i).name +"      "+ result.rows.item(i).hostipal)
                          }
                          this.setState({firstSearchPageData :result1})
                          
                                                                    
                          
                       }
                         
                  
                        );
                        
                    });
 
                    



    return dateTime;
  }

  render() {
    const {date, mode, show,firstSearchPageData,link} = this.state
    const { navigation } = this.props;
    const db = SQLite.openDatabase("db.DECO3801");
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists Doctor (id integer primary key not null, name text, hostipal text, date text, time text);"
      );
      
    });
     //删除表，请一定要注释
     /*
     db.transaction((tx) => {
       tx.executeSql(
         "DROP TABLE Doctor;"
       );
       // console.log(JSON.stringify(db))
    
     });*/

    //执行插值操作
    
    //  db.transaction((tx) => {
    //    tx.executeSql(
    //      "INSERT INTO Doctor (name, hostipal, date, time) VALUES('bruce','aaa','2021-10-24', '12:00')"
    //    );
    //    tx.executeSql(
    //      "INSERT INTO Doctor (name, hostipal, date, time) VALUES('Tom','bbb','2021-10-25', '12:00')"
    //    );
    //    tx.executeSql(
    //     "INSERT INTO Doctor (name, hostipal, date, time) VALUES('Carlos','ccc','2021-10-26', '12:00')"
    //    );


    //    tx.executeSql("select * from Doctor", 
    //    [],
    //     (_, result) =>{
        
    //      console.log(JSON.stringify(result.rows))
          
    //     }
        
    //      );
      
    //  });


    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              <Block flex>
           
                <Block>
                <Header
                    title="Booking"
                    back
                    optionLeft="Option 1"
                    optionRight="Option 2"
                    style={{marginBottom:2}}
                    navigation={this.props.navigation}
                    titleStyle = {{fontWeight: "bold", fontSize:30, marginLeft:35}} />
                    </Block>

                    <Block middle> 
                    
                    <MapView
                    style={{
                      marginTop: 20,
                      marginBottom:20,
                      width: width * 0.8,
                      height: height * 0.5
                    }}
                    initialRegion={{
                      latitude: -27.497,
                      longitude: 153.0025,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421
                    }}
                  >
                    {this.state.markers.map((marker, index) => {
                const coords = {
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                };

                const metadata = `Status: ${marker.statusValue}`;

                return (
                    <MapView.Marker
                        key={index}
                        coordinate={coords}
                        title={marker.HospitalName}
                        description={metadata}
                    />
                );
              })}
      </MapView>
                      <View>
                        <View>
                          <Button color= "black" onPress={() => {this.setState({mode:"date",show:true})}} title="Choose date">
                            <Text style= {{fontSize: 18, fontWeight: "bold", color: "#FFFFFF"}}>Booking Date</Text>
                            </Button>
                          {show && (
                              <DateTimePicker
                              testID="datePicker"
                              value={date}
                              mode={mode}
                              minimumDate={new Date()}
                              maximumDate={new Date(2023,1,1)}
                              display="default"
                              onChange={this.handleDateChange}
                              />
                          )}
                        </View>
                      </View>
                      <View>
                        {/* <View>
                        <Button style = {{marginBottom: 20}} color= "black" onPress={() => {this.setState({mode:"time",show:true})}} title="Choose time">
                            <Text style= {{fontSize: 18, fontWeight: "bold", color: "#FFFFFF"}}>Booking Time</Text>
                            </Button>
                          {show && (
                              <DateTimePicker
                              testID="dateTimePicker"
                              value={date}
                              mode= {mode}
                              is24Hour={true}
                              display="default"
                              onChange={this.handleTimeChange}
                              />
                          )}
                        </View> */}
                      </View>
                      {/* <Text bold size={18}>{this.dateToString(date)} {this.timeToString(date)}</Text> */}
                      <Button color="primary" onPress={createOneButtonAlert} style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            Confirm
                        </Text>
                      </Button>
                    </Block>

                </Block>
              </Block>
            </Block>

        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width ,
    height: height * 0.95 ,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
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
  map: {
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 2.2,
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
    marginBottom: 60
  }
});

export default Booking;
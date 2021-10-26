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
import { Block, Text, Button} from "galio-framework";
import {Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import MapView from 'react-native-maps';
import * as SQLite from "expo-sqlite";
import { Header} from "../components";

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

class Booking extends React.Component {
 

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
    firstSearchPageData: ['Choose an appointment time'],
     
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
                      tx.executeSql("select name, hostipal, date, department from Doctor where date = ?", 
                      [dateTime],
                       (_, result) =>{
                          var len = result.rows.length;                      
                          let result1=[]
                          for(let i=0; i<len; i++){
                              // result1.push(result.rows.item(i).date +"      "+ result.rows.item(i).name +"      "+ result.rows.item(i).hostipal)
                              console.log(JSON.stringify(result.rows.item(i).department))
                              result1.push(result.rows.item(i).date +"      "+ result.rows.item(i).name +"      "+ result.rows.item(i).hostipal +"      "+ result.rows.item(i).department)
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
        "create table if not exists Doctor (id integer primary key not null, name text, hostipal text, date text, time text, department text);"
      );


    });
     //删除医生表，请一定要注释
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "DROP TABLE Doctor;"
    //   );
    //   // console.log(JSON.stringify(db))
    
    // });




    // 执行医生插值操作,（老董 158-204）


    // db.transaction((tx) => {
    //           tx.executeSql(
    //     "INSERT INTO Doctor (name, hostipal, date, time, department) VALUES('Yifan','Royal Hospital','2021-10-29', '12:00', 'Pediatrics')"
    //   );
    //   tx.executeSql(
    //     "INSERT INTO Doctor (name, hostipal, date, time,department) VALUES('Yuanbo','Royal Hospital','2021-10-30', '13:00','Oncology')"
    //   );
    //   tx.executeSql(
    //     "INSERT INTO Doctor (name, hostipal, date, time, department) VALUES('Carlos','UQ Medical Centre','2021-10-29', '14:00', 'Cardiac Surgery')"
    //   );
    //   tx.executeSql(
    //     "INSERT INTO Doctor (name, hostipal, date, time, department) VALUES('Jimmy','UQ Medical Centre','2021-10-30', '13:00', 'Respiratory')"
    //   );
    //   tx.executeSql(
    //     "INSERT INTO Doctor (name, hostipal, date, time, department) VALUES('Yifan','Wesley Hospital','2021-10-29', '9:00', 'Pediatrics')"
    //   );
    //   tx.executeSql(
    //     "INSERT INTO Doctor (name, hostipal, date, time, department) VALUES('Jiale','Wesley Hospital','2021-10-30', '12:00', 'ophthalmology')"
    //   );
    //   tx.executeSql(
    //     "INSERT INTO Doctor (name, hostipal, date, time, department) VALUES('Yuanbo','Meter Hospital','2021-10-29', '12:00', 'Oncology')"
    //   );
    //   tx.executeSql(
    //     "INSERT INTO Doctor (name, hostipal, date, time, department) VALUES('Jimmy','Meter Hospital','2021-10-30', '12:00', 'Respiratory')"
    //   );
    //   tx.executeSql(
    //     "INSERT INTO Doctor (name, hostipal, date, time, department) VALUES('Yundong','Private Hospital','2021-10-29', '12:00', 'Pediatrics')"
    //   );
    //   tx.executeSql(
    //     "INSERT INTO Doctor (name, hostipal, date, time, department) VALUES('Jiale','Private Hospital','2021-10-30', '12:00', 'Oncology')"
    //   );


    //   tx.executeSql("select * from Doctor", 
    //   [],
    //    (_, result) =>{
        
    //     console.log(JSON.stringify(result.rows))
          
    //    }
        
    //     );
      
    // });

    
    













       //删除照片表，请一定要注释
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE DoctorImage;"
      );
      // console.log(JSON.stringify(db))
    
    });

                                                                                                
    // 执行对照片表的插值操作


    db.transaction((tx) => {
     
      tx.executeSql(
        "create table if not exists DoctorImage (id integer primary key not null, nameuse text, imagelink text, doctorname text, introduction text, hospital text, date text, time text);"
      );
      
    });
    
    
    
    db.transaction((tx) => {



      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-29      Yifan      Royal Hospital      Pediatrics',  'http://81.68.132.232/wp-content/uploads/2021/10/1-1-300x200.jpg', 'Yifan', 'Doctor of Pediatrics good at various intractable diseases in pediatrics Has won many awards', 'Royal Hospital', '2021-10-29', '13:00')"
      );
                                                                                                                                                                                                                                                                                                                      
      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-30      Yuanbo      Royal Hospital      Oncology',  'http://81.68.132.232/wp-content/uploads/2021/10/2-1-300x200.jpg', 'Yuanbo', 'Doctor of Medicine An international oncology leader and a well-known surgical oncologist', 'Royal Hospital', '2021-10-30', '13:00')"
      );

                                                                                                                                                                                                                                                   
      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-29      Carlos      UQ Medical Centre      Cardiac Surgery',  'http://81.68.132.232/wp-content/uploads/2021/10/3-1-300x200.jpg', 'Carlos', 'Dr Carlos dedicated to solving cardiovascular diseases has many years of experience in the industry', 'UQ Medical Centre', '2021-10-29', '14:00')"
      );


      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-30      Jimmy      UQ Medical Centre      Respiratory',  'http://81.68.132.232/wp-content/uploads/2021/10/4-1-300x200.jpg', 'Jimmy', 'Dr. Jiming specializes in Respiratory and once worked as an attending physician in a famous hospital', 'UQ Medical Centre', '2021-10-30', '13:00')"
      );

  
      tx.executeSql("select * from DoctorImage", 
      [],
       (_, result) =>{
        
        console.log(JSON.stringify(result.rows))    
          
       }
        
        );
      
    });





    return (
      <Block>
            <Header
            
            title="Booking"
            back
            optionLeft="Option 1"
            optionRight="Option 2"
            style={{marginBottom:2}}
            navigation={this.props.navigation}
            titleStyle = {{fontWeight: "bold", fontSize:22, marginLeft:35}} />
       
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              <Block flex>
           
                <Block>
                  
              <Block  style={{backgroundColor:"#D9E6F7", height:500, flexDirection: 'row',flexWrap: 'wrap'}}>
              {firstSearchPageData.map((item) => {

              
          
                return (
                <Block key={item}>

                  <Button
                  style={{height:60}}
                  color="info"
                  // style={{marginLeft:12}}
                  size="large"
                  onPress={() => navigation.navigate('BookingDetail', {jjw:item})}
                  key={item}
                  >
                    <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>

                    {item}
                    </Text>
                   
                    </Button>
                   {/* <Text>{link}</Text> */}
                    {/* <Image source={{uri:link}}style={{width:40,height:40}} /> */}
                   
                </Block>
           
                 
                  
                    
                
                )
              })}

            </Block>






                
                    </Block>                    
                    <Block middle> 
                      <View>
                        <View>
                          <Button color= "black" onPress={() => {this.setState({mode:"date",show:true})}} title="Choose date" style ={{width:200,marginTop:30}}>
                            <Text style= {{fontSize: 18, fontWeight: "bold", color: "#FFFFFF"}}>Choose Booking Date</Text>
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
                     {/* 插值前一定要把这行注释掉 */}
                      {/* <Text bold size={18} style={{marginTop:20}}>{this.dateToString(date)} {this.timeToString(date)}</Text> */}
                     
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
    width: width * 1,
    height: height * 1,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
   
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
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
        bookTime:"",
    },
    date:new Date(),
    mode:"date",
    show:false,
    link:"",
    dateUse:"",
    firstSearchPageData: ['Choose an appointment time'],
     
    };
  }

  handleDateChange = (event,date) => {
    //set date
    if(event.type === "set"){
        const bookDay = this.dateToString(date)
        let obj = this.state.obj
        obj.bookDay = bookDay
        this.setState({obj,date,show:false})
    }else{
        //cancel button
        this.setState({show:false})
    }
   
  }

  handleTimeChange = (event,date) => {
    //set time
    if(event.type === "set"){
        const bookTime = this.timeToString(date)
        let obj = this.state.obj
        obj.bookTime = bookTime
        this.setState({obj,date,show:false})
    }else{
        //cancle button
        this.setState({show:false})
    }
  }
  //Time to String
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

  //data to String
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
                          console.log('result',result);
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
     //delet doctor table
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     "DROP TABLE Doctor;"
    //   );
    //   // console.log(JSON.stringify(db))
    
    // });


    // insert doctor information into the table

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

       //delet picture table
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE DoctorImage;"
      );
    });

                                                                                                
    // insert picture into table
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists DoctorImage (id integer primary key not null, nameuse text, imagelink text, doctorname text, introduction text, hospital text, date text, time text);"
      );
      
    });
    
    db.transaction((tx) => {
      /**Freepik. 2021. Free Photo | Smiling asian male doctor pointing upwards. [online] Available at: <https://www.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_4010419.htm#page=1&query=doctor&position=3&from_view=keyword> [Accessed 1 October 2021]. */
      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-29      Yifan      Royal Hospital      Pediatrics',  'http://81.68.132.232/wp-content/uploads/2021/10/1-1-300x200.jpg', 'Yifan', 'Doctor of Pediatrics good at various intractable diseases in pediatrics Has won many awards', 'Royal Hospital', '2021-10-29', '13:00')"
      );
      /** Freepik. 2021. Free Photo | Portrait of a hansome young male doctor man. [online] Available at: <https://www.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_6871490.htm#page=1&query=doctor&position=28&from_view=keyword> [Accessed 2 October 2021]. */                                                                                                                                                                                                                                                                                                                
      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-30      Yuanbo      Royal Hospital      Oncology',  'http://81.68.132.232/wp-content/uploads/2021/10/2-1-300x200.jpg', 'Yuanbo', 'Doctor of Medicine An international oncology leader and a well-known surgical oncologist', 'Royal Hospital', '2021-10-30', '13:00')"
      );

      /**Freepik. 2021. Free Photo | Portrait of female nurse showing stethoscope on white.. [online] Available at: <https://www.freepik.com/free-photo/portrait-female-nurse-showing-stethoscope-white_16462771.htm#page=1&query=doctor&position=8&from_view=keyword> [Accessed 3 October 2021]. */                                                                                                                                                                                                         
      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-29      Carlos      UQ Medical Centre      Cardiac Surgery',  'http://81.68.132.232/wp-content/uploads/2021/10/3-1-300x200.jpg', 'Carlos', 'Dr Carlos dedicated to solving cardiovascular diseases has many years of experience in the industry', 'UQ Medical Centre', '2021-10-29', '14:00')"
      );

      /**Freepik. 2021. Free Photo | Female doctor looking at camera and smiling in blue uniform. [online] Available at: <https://www.freepik.com/free-photo/female-doctor-looking-camera-smiling-blue-uniform_15405878.htm#page=1&position=5&from_view=detail#query=doctor&position=5&from_view=detail> [Accessed 7 October 2021]. */
      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-30      Jimmy      UQ Medical Centre      Respiratory',  'http://81.68.132.232/wp-content/uploads/2021/10/4-1-300x200.jpg', 'Jimmy', 'Dr. Jiming specializes in Respiratory and once worked as an attending physician in a famous hospital', 'UQ Medical Centre', '2021-10-30', '13:00')"
      );

        /**Freepik. 2021. Free Photo | Smiling asian male doctor pointing upwards. [online] Available at: <https://www.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_4010419.htm#page=1&query=doctor&position=3&from_view=keyword> [Accessed 1 October 2021]. */
      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-29      Yifan      Wesley Hospital      Pediatrics',  'http://81.68.132.232/wp-content/uploads/2021/10/1-1-300x200.jpg', 'Yifan', 'Doctor of Pediatrics good at various intractable diseases in pediatrics Has won many awards', 'Royal Hospital', '2021-10-29', '15:00')"
      );

     /**Freepik. 2021. Free Photo | Young asia male doctor in white medical uniform with stethoscope looking at camera, smile and arms crossed while video conference call with patient in health hospital.. [online] Available at: <https://www.freepik.com/free-photo/young-asia-male-doctor-white-medical-uniform-with-stethoscope-looking-camera-smile-arms-crossed-while-video-conference-call-with-patient-health-hospital_15114477.htm#page=1&query=doctor&pos> [Accessed 3 October 2021]. */                                                                                                                                                                                                                          
      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-30      Jiale      Wesley Hospital      ophthalmology',  'http://81.68.132.232/wp-content/uploads/2021/10/5-1-300x169.jpg', 'Jiale', 'Dr Jiale is a well-known ophthalmologist in Australia His research has been published in the Lancet magazine many times', 'Wesley Hospital', '2021-10-30', '12:00')"
      );

      /** Freepik. 2021. Free Photo | Portrait of a hansome young male doctor man. [online] Available at: <https://www.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_6871490.htm#page=1&query=doctor&position=28&from_view=keyword> [Accessed 2 October 2021]. */
      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-29      Yuanbo      Meter Hospital      Oncology',  'http://81.68.132.232/wp-content/uploads/2021/10/2-1-300x200.jpg', 'Yuanbo', 'Doctor of Medicine An international oncology leader and a well-known surgical oncologist', 'Meter Hospital', '2021-10-29', '12:00')"
      );

      /** Freepik. 2021. Free Photo | Female doctor looking at camera and smiling in blue uniform. [online] Available at: <https://www.freepik.com/free-photo/female-doctor-looking-camera-smiling-blue-uniform_15405878.htm#page=1&position=5&from_view=detail#query=doctor&position=5&from_view=detail> [Accessed 7 October 2021]. */
      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-30      Jimmy      Meter Hospital      Respiratory',  'http://81.68.132.232/wp-content/uploads/2021/10/4-1-300x200.jpg', 'Jimmy', 'Dr. Jiming specializes in Respiratory and once worked as an attending physician in a famous hospital', 'UQ Medical Centre', '2021-10-30', '12:00')"
      );

       /**https://www.freepik.com/free-photo/young-male-doctor-white-uniform-standing-with-crossed-arms-looking-confident-front-view_15616210.htm#page=1&query=doctor&position=15&from_view=keyword */                                                                                                                                                
      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-29      Yundong      Private Hospital      Pediatrics',  'http://81.68.132.232/wp-content/uploads/2021/10/6-300x200.jpg', 'Yundong', 'Dr. Yuan Dong graduated from Harvard Medical School, specializing in pediatrics. Loved by children', 'Private Hospital', '2021-10-29', '12:00')"
      );
      /**Freepik. 2021. Free Photo | Young asia male doctor in white medical uniform with stethoscope looking at camera, smile and arms crossed while video conference call with patient in health hospital.. [online] Available at: <https://www.freepik.com/free-photo/young-asia-male-doctor-white-medical-uniform-with-stethoscope-looking-camera-smile-arms-crossed-while-video-conference-call-with-patient-health-hospital_15114477.htm#page=1&query=doctor&pos> [Accessed 3 October 2021]. */
      tx.executeSql(
        "INSERT INTO DoctorImage (nameuse, imagelink, doctorname, introduction,  hospital, date,  time) VALUES('2021-10-30      Jiale      Private Hospital      Oncology',  'http://81.68.132.232/wp-content/uploads/2021/10/5-1-300x169.jpg', 'Jiale', 'Dr Jiale is a well-known ophthalmologist in Australia His research has been published in the Lancet magazine many times', 'Wesley Hospital', '2021-10-30', '12:00')"
      );
                                                    
      tx.executeSql("select * from DoctorImage", 
      [],
       (_, result) =>{
        console.log(JSON.stringify(result.rows))     
       }
        );
    });

    return (
      <Block flex >
            <Header
              title="Booking"
              back
              optionLeft="Option 1"
              optionRight="Option 2"
              style={{marginBottom:2}}
              navigation={this.props.navigation}
              titleStyle = {{fontWeight: "bold", fontSize:22, marginLeft:35, fontFamily: 'serif'}} />
        
          <Block safe flex middle style={styles.card}>
            <Block >
              <Block flex>         
                <Block> 
                  <Block  style={{ height:width *0.9, flexDirection: 'row',flexWrap: 'wrap'}}>
                  {firstSearchPageData.map((item) => {
                    return (
                    <Block key={item}>
                      <Button
                      style={{height:60, width:width  * 0.8}}
                      color="rgb(230,238,235)"
                      // style={{marginLeft:12}}
                      size="large"
                      onPress={() => navigation.navigate('BookingDetail', {jjw:item})}
                      key={item}
                      >
                        <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>
                        {item}
                        </Text>                   
                      </Button>
                    </Block>
                    )
                  })}

                </Block>
              </Block>               

              <Block middle style = {{height: height * 0.2}}> 
                <View>
                  <View>
                    <Button color= "black" onPress={() => {this.setState({mode:"date",show:true})}} 
                    title="Choose date" style ={{width:width * 0.8 ,marginTop:20}}>
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
              </Block>
            </Block>
          </Block>
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
    marginLeft: 20,
    height: height * 0.8,
    shadowColor: "black",
    marginTop:40,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    backgroundColor:"rgb(240,248,255)",
    borderWidth: 3,
    borderRadius: 20,
    elevation:20,
  },
  map: {
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 2.2,
  },

});

export default Booking;
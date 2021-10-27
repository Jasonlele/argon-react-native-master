import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"
import { Block, Checkbox, Text, theme } from "galio-framework";
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");


class Booking extends React.Component {
  state={
    obj:{
        bookDay:"",
        bookTime:"",  //booking
    },
    date:new Date(),
    mode:"date",
    show:false 
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
        //cancel button
        this.setState({show:false})
    }
  }
  //time to String type
  timeToString = (date) => {
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

  //date to String type
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
    return dateTime;
  }

  render() {
    const {date, mode, show} = this.state
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
                <Block flex={0.17} middle>
                  <Text  style ={{fontWeight:'bold'}} size={30} >
                    Online Booking
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Name"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>                    
                    <Block middle> 
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
                        <View>
                        <Button color= "black" onPress={() => {this.setState({mode:"time",show:true})}} title="Choose time">
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
                        </View>
                      </View>
                      <Text bold size={18} style={{marginTop:10}}>{this.dateToString(date)} {this.timeToString(date)}</Text>
                      <Button color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            Confirm
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
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
    width: width * 0.9,
    height: height * 0.875,
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
    marginTop: 25
  }
});

export default Booking;
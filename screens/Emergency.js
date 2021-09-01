import React from "react";
import call from 'react-native-phone-call'
import { Button } from "../components";
const args = {
    number: '9093900003', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
  };
class Emergency extends React.Component {
    render() {
        return(
            <Button onPress = {call(args).catch(console.error)}></Button> 
            
        )
    }
}

export default Emergency;

import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform,Text,TouchableWithoutFeedback } from 'react-native';
import  {DeviceEventEmitter} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as SQLite from "expo-sqlite";


export default function ImagePickerExample() {
 
    const [image, setImage] = useState(null);
    
    
    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {

      const db = SQLite.openDatabase("db.DECO3801");
      db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists ProfileImage (id integer primary key not null, phone text, uri text);"
        );
      });

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
      db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO ProfileImage (phone, uri) VALUES(?,?)",
        [test,result.uri]
      );

      tx.executeSql("select * from ProfileImage", 
      [],
       (_, result) =>{
        
        console.log(JSON.stringify(result.rows))
       }
      );
    });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };


    
  
    return (
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
        <Text>Old View:</Text>
        <Image source={{ uri: useUri}} style={{ width: 200, height: 200 }} />
        </View>
      
        <View style={{marginTop:20}}>
          <Text>New View:</Text>
          <Image source={{ uri: image}} style={{ width: 200, height: 200 }} />
          <View style={{marginTop:20}}>
          <Button title="Upload your avatar" onPress={pickImage} />
          </View>
        </View>
      </View>
    );
  }
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';
import Firebase from './screens/Firebase';


export default function App() {

  useEffect(()=>{
    const myitems = firebase.database().ref();
    myitems.on("value",datasnap => {
      console.log(Object.values(datasnap.val()));
    })
  })

  const plus = () => {
    firebase.database().ref().update({
      LED_STATUS : 1
    });
  }

  const minus  = () => {
    firebase.database().ref().update({
      LED_STATUS : 0
    });
  }

  return (
    <View style={styles.container}>
      <Button title="Up" onPress={()=>{plus()}}  />
      <Button title="Down" onPress={()=>{minus()}}  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

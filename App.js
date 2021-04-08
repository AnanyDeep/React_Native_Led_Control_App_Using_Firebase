import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";
import firebase from "firebase";
import Firebase from "./screens/Firebase";

export default function App() {
  const [status, setStatus] = useState([0]);
  const [Hum, setHum] = useState(0);

  // const [temp, setTemp] = useState([0]);

  useEffect(() => {
    const myitems = firebase.database().ref("Humidity");
    myitems.on("value", (datasnap) => {
      setStatus(Object.values(datasnap.val()));
      setHum(status[0]);
      // setTemp(Object.values(datasnap.val()));
      console.log(Object.values(datasnap.val()));
      // console.log(status);
    });
  });

  const plus = () => {
    firebase.database().ref().update({
      LED_STATUS: 1,
    });
  };

  const minus = () => {
    firebase.database().ref().update({
      LED_STATUS: 0,
    });
  };

  return (
    <View style={styles.container}>
      {!status ? (
        <Text>No data</Text>
      ) : (
        <View>
          {/* <Text>{status[0]}</Text> */}
          <Text>{Hum}</Text>
          {/* <Text>{temp[0]}</Text> */}
        </View>
      )}
      <View style={styles.btn}>
        <TouchableOpacity onPress={() => plus()}>
          <Text style={styles.txt}>HIGH</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress={() => minus()}>
          <Text style={styles.txt}>LOW</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    marginTop: 50,
  },
  txt: {
    fontSize: 50,
    backgroundColor: "orange",
    paddingHorizontal: 100,
    borderRadius: 50,
    color: "#FFF",
  },
});

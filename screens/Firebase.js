import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxu0YWvepkPK8wPPKbdj7qHOv60OVYAAM",
  authDomain: "testing-api-6758b.firebaseapp.com",
  databaseURL: "https://testing-api-6758b-default-rtdb.firebaseio.com",
  projectId: "testing-api-6758b",
  storageBucket: "testing-api-6758b.appspot.com",
  messagingSenderId: "702306414400",
  appId: "1:702306414400:web:640577585b04b70d44d4a5",
  measurementId: "G-HWTD5M6WRT",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// const firebaseConfig = {
//   apiKey: "AIzaSyDxu0YWvepkPK8wPPKbdj7qHOv60OVYAAM",
//   authDomain: "testing-api-6758b.firebaseapp.com",
//   databaseURL: "https://testing-api-6758b-default-rtdb.firebaseio.com",
//   projectId: "testing-api-6758b",
//   storageBucket: "testing-api-6758b.appspot.com",
//   messagingSenderId: "702306414400",
//   appId: "1:702306414400:web:640577585b04b70d44d4a5",
//   measurementId: "G-HWTD5M6WRT"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyB2nKtohksyRb6SYEl85lIAi0f6iNi8eRg",
//   authDomain: "iot-t-h-4e490.firebaseapp.com",
//   databaseURL: "https://iot-t-h-4e490-default-rtdb.firebaseio.com",
//   projectId: "iot-t-h-4e490",
//   storageBucket: "iot-t-h-4e490.appspot.com",
//   messagingSenderId: "238958511632",
//   appId: "1:238958511632:web:0f44750732dd81a6d8ec95",
//   measurementId: "G-WGXVYC8DJL",
// };

import firebase from 'firebase' 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxu0YWvepkPK8wPPKbdj7qHOv60OVYAAM",
    authDomain: "testing-api-6758b.firebaseapp.com",
    databaseURL: "https://testing-api-6758b-default-rtdb.firebaseio.com",
    projectId: "testing-api-6758b",
    storageBucket: "testing-api-6758b.appspot.com",
    messagingSenderId: "702306414400",
    appId: "1:702306414400:web:640577585b04b70d44d4a5",
    measurementId: "G-HWTD5M6WRT"
  };

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}
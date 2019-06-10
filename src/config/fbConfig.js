import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAYo_rBEIJa1wgxk3VAmG4IY0zsWmxysII",
  authDomain: "react-firebase-a3124.firebaseapp.com",
  databaseURL: "https://react-firebase-a3124.firebaseio.com",
  projectId: "react-firebase-a3124",
  storageBucket: "react-firebase-a3124.appspot.com",
  messagingSenderId: "548549798583",
  appId: "1:548549798583:web:f6db4f2c9836bb6f"
};

  firebase.initializeApp(firebaseConfig);


  export default firebase;
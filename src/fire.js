import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBIB00nNSrBWQ5BqzulJx43Q4R1FUEx4UU",
    authDomain: "react-login-25b66.firebaseapp.com",
    projectId: "react-login-25b66",
    storageBucket: "react-login-25b66.appspot.com",
    messagingSenderId: "916831633115",
    appId: "1:916831633115:web:8712f91a36155cdc8996fe"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);


export default fire;
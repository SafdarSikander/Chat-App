import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDcBjOxdFfV4t3BFBruZXnlE7tsR3WdFl8",
    authDomain: "expochatapp.firebaseapp.com",
    databaseURL: "https://expochatapp.firebaseio.com",
    projectId: "expochatapp",
    storageBucket: "expochatapp.appspot.com",
    messagingSenderId: "474199121447"
};

firebase.initializeApp(firebaseConfig);
console.log('firebase initialized');
export default firebase;
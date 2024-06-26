// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCBfKcvpInMeunZDvMWM0pg3tkwKpcshsE",
    authDomain: "codeboard-def32.firebaseapp.com",
    projectId: "codeboard-def32",
    storageBucket: "codeboard-def32.appspot.com",
    messagingSenderId: "108120554431",
    appId: "1:108120554431:web:2897ff2b1c78e2a6e8bf0a",
    measurementId: "G-28ZYQRRQNL"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

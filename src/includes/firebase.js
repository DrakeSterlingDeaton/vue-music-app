import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBmn8gJnk1i7WLxkYwT80hwZV3eo8_IIfQ",
    authDomain: "music-a4314.firebaseapp.com",
    projectId: "music-a4314",
    storageBucket: "music-a4314.appspot.com",
    messagingSenderId: "9636154788",
    appId: "1:9636154788:web:1b18062ac605f0052ec531"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');

  export {
      auth,
      db,
      usersCollection,
      songsCollection,
      storage
  }
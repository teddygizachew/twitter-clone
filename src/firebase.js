import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCiNE1dFv-Z6lMA75lF8gTK6ZeLQKV-mRk",
  authDomain: "twitter-clone-da08c.firebaseapp.com",
  databaseURL: "https://twitter-clone-da08c.firebaseio.com",
  projectId: "twitter-clone-da08c",
  storageBucket: "twitter-clone-da08c.appspot.com",
  messagingSenderId: "854115322638",
  appId: "1:854115322638:web:5667fe476442bdf6df255f",
  measurementId: "G-X18KKNC8J6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

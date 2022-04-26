import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNrgEAWk-I-z1W7wx7gk5R62aeJQ16YmQ",
  authDomain: "recipes-83efc.firebaseapp.com",
  projectId: "recipes-83efc",
  storageBucket: "recipes-83efc.appspot.com",
  messagingSenderId: "863951404315",
  appId: "1:863951404315:web:55b7303bf074e96ca667be",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();

export { projectFirestore };

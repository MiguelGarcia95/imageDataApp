import firebase from 'firebase/app';
import {FIREBASE_API_KEY, FIREBASE_APP_ID} from './API_KEYS';

var firebaseConfig = {
  apiKey: "",
  authDomain: FIREBASE_API_KEY,
  databaseURL: "https://image-labeled-search.firebaseio.com",
  projectId: "image-labeled-search",
  storageBucket: "",
  messagingSenderId: "991120553633",
  appId: FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCFMmP88YM2ZnEtTn0bXC1LhRILK3zC8HY",
  authDomain: "pico-pic-4e93d.firebaseapp.com",
  projectId: "pico-pic-4e93d",
  storageBucket: "pico-pic-4e93d.appspot.com",
  messagingSenderId: "204550710396",
  appId: "1:204550710396:web:d019c5e053f33bb8a815f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBw8JXmfVVoPODxaPXPZ74QUGBz7eBtI04",
    authDomain: "react-integration-25190.firebaseapp.com",
    projectId: "react-integration-25190",
    storageBucket: "react-integration-25190.appspot.com",
    messagingSenderId: "648039327912",
    appId: "1:648039327912:web:79d5269fff81345070fa9d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp };
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"; // DUDA: de donde salio el compat.........
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBedT8oQSgVQqaiyqq7GcAcEqJL_Ws9bsA",
  authDomain: "proyectoreact-c2e7b.firebaseapp.com",
  projectId: "proyectoreact-c2e7b",
  storageBucket: "proyectoreact-c2e7b.appspot.com",
  messagingSenderId: "907010262051",
  appId: "1:907010262051:web:2a8e5232adfc6a3a535d96"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
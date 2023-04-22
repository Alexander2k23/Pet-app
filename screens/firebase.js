// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO69h-A9aPSp3Gmebmc5tmcuNTQCSLr_I",
  authDomain: "auth-25226.firebaseapp.com",
  projectId: "auth-25226",
  storageBucket: "auth-25226.appspot.com",
  messagingSenderId: "592873308112",
  appId: "1:592873308112:web:f1d77deccc3b424a9843d5",
  measurementId: "G-BE2P0S44XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

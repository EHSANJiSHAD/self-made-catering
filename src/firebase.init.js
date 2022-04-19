// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWwlW_sYG0ONkeapPG6QE6viKTNpXT6UQ",
  authDomain: "self-made-1947d.firebaseapp.com",
  projectId: "self-made-1947d",
  storageBucket: "self-made-1947d.appspot.com",
  messagingSenderId: "1086580941094",
  appId: "1:1086580941094:web:7848a7c369fd4c14fc61e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
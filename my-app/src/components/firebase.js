// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaVwRtz6IE07kNnmFLhm4aMIT_EV4S8fI",
  authDomain: "fb-tpi-cb4c0.firebaseapp.com",
  projectId: "fb-tpi-cb4c0",
  storageBucket: "fb-tpi-cb4c0.appspot.com",
  messagingSenderId: "1022036146643",
  appId: "1:1022036146643:web:83f17b9cd83f10502d5726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
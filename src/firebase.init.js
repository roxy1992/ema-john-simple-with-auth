// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzEuQ2yg028YpYHYe6Z4e3tsOMb-bJZn0",
    authDomain: "ema-john-simple-46db7.firebaseapp.com",
    projectId: "ema-john-simple-46db7",
    storageBucket: "ema-john-simple-46db7.appspot.com",
    messagingSenderId: "320615040606",
    appId: "1:320615040606:web:e96c051ad9385dce4116cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


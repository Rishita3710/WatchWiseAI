// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_8NdLymxhhkCyLYeFAICHOVSwUzztfKY",
    authDomain: "netflixgpt-f11b0.firebaseapp.com",
    projectId: "netflixgpt-f11b0",
    storageBucket: "netflixgpt-f11b0.firebasestorage.app",
    messagingSenderId: "99267156957",
    appId: "1:99267156957:web:209ee53b4b84691e64f434",
    measurementId: "G-BH05SKWQBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

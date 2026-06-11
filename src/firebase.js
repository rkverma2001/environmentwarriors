// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCU0w60B9lcZLoJiXQ6QnS0kFrbwakiLM",
  authDomain: "environmentwarriors-56305.firebaseapp.com",
  projectId: "environmentwarriors-56305",
  storageBucket: "environmentwarriors-56305.firebasestorage.app",
  messagingSenderId: "93555112613",
  appId: "1:93555112613:web:dcc30ab2be6988224fab4c",
  measurementId: "G-0HY6HTBZ5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
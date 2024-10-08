// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8X0OZ5MYius6EWSWPoNf03dM38S7pmuc",
  authDomain: "netflixgpt-e77ec.firebaseapp.com",
  projectId: "netflixgpt-e77ec",
  storageBucket: "netflixgpt-e77ec.appspot.com",
  messagingSenderId: "310279761887",
  appId: "1:310279761887:web:5b95c495b9ea06e0dc9e6a",
  measurementId: "G-YZH81M9C88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
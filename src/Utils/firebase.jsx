// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNsf0gShCNX2_JjFgMnUDpN-DaNrVfVGA",
  authDomain: "mockskills-5a39c.firebaseapp.com",
  projectId: "mockskills-5a39c",
  storageBucket: "mockskills-5a39c.appspot.com",
  messagingSenderId: "29905684803",
  appId: "1:29905684803:web:480c8b85643079b0bc87f6",
  measurementId: "G-0WFGNRCPXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCMq58aR8ulIbRUUp0GuphBfVlJkvKLNU",
    authDomain: "mockskills-9f511.firebaseapp.com",
    projectId: "mockskills-9f511",
    storageBucket: "mockskills-9f511.firebasestorage.app",
    messagingSenderId: "720861640477",
    appId: "1:720861640477:web:b0f5241572b2045df793f4",
    measurementId: "G-4T95W3B3M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// Initialize the Google and GitHub providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
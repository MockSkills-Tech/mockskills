// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGGC3JyW32x_XdFR_gjtHgBCrbhp_RuD8",
  authDomain: "authentication-a8290.firebaseapp.com",
  projectId: "authentication-a8290",
  storageBucket: "authentication-a8290.firebasestorage.app",
  messagingSenderId: "154415137630",
  appId: "1:154415137630:web:13f2ec1b37a92a855205cf",
  measurementId: "G-K27TWVLTRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize the Google and GitHub providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
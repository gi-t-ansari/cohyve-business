// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAJrdA3pjY6ER8mYCJGn2rbXStPveeMpvc",
  authDomain: "cooasis-business.firebaseapp.com",
  projectId: "cooasis-business",
  storageBucket: "cooasis-business.appspot.com",
  messagingSenderId: "647997497721",
  appId: "1:647997497721:web:604845b40082e6664bcfa8",
  measurementId: "G-1R9HNMW90M"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink };

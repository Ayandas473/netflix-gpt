// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8YqawNTbcvIyf-w87AlY1xEV4U6lSfqc",
  authDomain: "netflixgpt-c1a89.firebaseapp.com",
  projectId: "netflixgpt-c1a89",
  storageBucket: "netflixgpt-c1a89.appspot.com",
  messagingSenderId: "1058436403392",
  appId: "1:1058436403392:web:498f404c398ed342e99d25",
  measurementId: "G-EDYDS81208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();
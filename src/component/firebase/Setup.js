// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbR5V9M-BWFbXXX8q8xxshcSpQdX6OQWo",
  authDomain: "swiggy-clone-a64fb.firebaseapp.com",
  projectId: "swiggy-clone-a64fb",
  storageBucket: "swiggy-clone-a64fb.appspot.com",
  messagingSenderId: "958264371653",
  appId: "1:958264371653:web:9937e4b83bba5bfe2283ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
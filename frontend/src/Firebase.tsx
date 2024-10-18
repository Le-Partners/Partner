// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZw1yGsV08t0CEdblO7vnnaGp3knDYXN8",
  authDomain: "partner-d9e29.firebaseapp.com",
  projectId: "partner-d9e29",
  storageBucket: "partner-d9e29.appspot.com",
  messagingSenderId: "655520355565",
  appId: "1:655520355565:web:fa7988daca13401d4668e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider();
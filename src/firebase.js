// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS61h0LjVMfL8caRWfmLwMzzYoDzjtyYg",
  authDomain: "fintrack-cc1ec.firebaseapp.com",
  projectId: "fintrack-cc1ec",
  storageBucket: "fintrack-cc1ec.firebasestorage.app",
  messagingSenderId: "939152999278",
  appId: "1:939152999278:web:86f26a4bfd3e104c30f77f",
  measurementId: "G-41ML8DKEMW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Export initialized instances
export { app, auth, db, provider };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

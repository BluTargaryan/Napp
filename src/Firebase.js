// JavaScript
// src/firebase.js

import { getFirestore } from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpyju-Ij14ANuaUs7zW71ZrIyRq3Dv96s",
  authDomain: "napp-9dfd0.firebaseapp.com",
  projectId: "napp-9dfd0",
  storageBucket: "napp-9dfd0.appspot.com",
  messagingSenderId: "544702128003",
  appId: "1:544702128003:web:a6dfde66beb1ff08ff60b6",
  measurementId: "G-G523MLVTPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export {db}
export const storage = getStorage(app);
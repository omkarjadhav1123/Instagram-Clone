// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlUBoPVVCY_awe9BIrWGmMluLYFK3iouI",
  authDomain: "insta-7873a.firebaseapp.com",
  projectId: "insta-7873a",
  storageBucket: "insta-7873a.appspot.com",
  messagingSenderId: "783329036213",
  appId: "1:783329036213:web:1725d117f59fb87d88bbfc"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};
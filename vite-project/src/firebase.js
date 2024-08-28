// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFwOvn1Pf9Vnh12lu991FTRH54uhElygQ",
  authDomain: "restaurants-49443.firebaseapp.com",
  projectId: "restaurants-49443",
  storageBucket: "restaurants-49443.appspot.com",
  messagingSenderId: "746221709105",
  appId: "1:746221709105:web:9f6f7e0aed60b672def210",
  measurementId: "G-ZFC7WT6B4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);
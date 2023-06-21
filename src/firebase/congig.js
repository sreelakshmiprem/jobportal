import firebase from './firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAvkHzJV0AX44nSvUUHjzlloxdelym-9Dc",
  authDomain: "mini-project2k23.firebaseapp.com",
  projectId: "mini-project2k23",
  storageBucket: "mini-project2k23.appspot.com",
  messagingSenderId: "462172702162",
  appId: "1:462172702162:web:e645e7845d889c25ed340b",
  measurementId: "G-XPEXTWMBRP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
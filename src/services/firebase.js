import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC3Db4BNxvv_XQrl0e5hXFVaoh84uUpVWE",
  authDomain: "conhecimento-sb.firebaseapp.com",
  projectId: "conhecimento-sb",
  storageBucket: "conhecimento-sb.appspot.com",
  messagingSenderId: "711275161113",
  appId: "1:711275161113:web:bb584edab60a35d12a2c88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
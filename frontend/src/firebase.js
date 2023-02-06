// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqdDoC-rtNGHXzD8sRiocOAbDiGeFkO8I",
  authDomain: "my-app-fm.firebaseapp.com",
  projectId: "my-app-fm",
  storageBucket: "my-app-fm.appspot.com",
  messagingSenderId: "667502571951",
  appId: "1:667502571951:web:4182110630999d6309ff5a",
  measurementId: "G-DE98KPZSEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app
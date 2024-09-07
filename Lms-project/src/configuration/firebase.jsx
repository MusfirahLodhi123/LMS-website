// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMFMM4dZrYwzq2i0IxK7ZI-V_yNCAoHVE",
  authDomain: "lmsbymusfirah.firebaseapp.com",
  projectId: "lmsbymusfirah",
  storageBucket: "lmsbymusfirah.appspot.com",
  messagingSenderId: "224385615804",
  appId: "1:224385615804:web:edcedf1f2a5761e6f80db9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{app,auth,signOut,db}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRlVzX8RqSdu4_EKXpKP-Pjk8DE8Wp9ck",
  authDomain: "podcast-app-react-a32e8.firebaseapp.com",
  projectId: "podcast-app-react-a32e8",
  storageBucket: "podcast-app-react-a32e8.appspot.com",
  messagingSenderId: "743640244778",
  appId: "1:743640244778:web:480547e9692bd6faa8d953",
  measurementId: "G-1Q3Z5Z2XCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage}
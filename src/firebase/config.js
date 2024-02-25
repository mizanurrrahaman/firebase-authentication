// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwxZGvR89mkRpnjbgcXZdhZOYhCPlW5Vw",
  authDomain: "login-5a9a0.firebaseapp.com",
  projectId: "login-5a9a0",
  storageBucket: "login-5a9a0.appspot.com",
  messagingSenderId: "481902166960",
  appId: "1:481902166960:web:db7172119897c8a7b20c75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
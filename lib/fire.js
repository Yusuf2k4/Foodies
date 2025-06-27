// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGZ3I0JHtvr9LIGMK_uVJP7wIe_bTajY8",
  authDomain: "foodies-e2c63.firebaseapp.com",
  projectId: "foodies-e2c63",
  storageBucket: "foodies-e2c63.firebasestorage.app",
  messagingSenderId: "36828107543",
  appId: "1:36828107543:web:5b42268651f8804f841d52",
  measurementId: "G-3M282DXKX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

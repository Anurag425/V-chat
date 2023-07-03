// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhR52ENZHuwiOJI1UDbat0iqjQrGJ88pY",
  authDomain: "v-chat-73960.firebaseapp.com",
  projectId: "v-chat-73960",
  storageBucket: "v-chat-73960.appspot.com",
  messagingSenderId: "992220196619",
  appId: "1:992220196619:web:5f4b0296d3d6d36a73fc0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
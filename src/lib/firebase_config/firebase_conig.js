import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC36bGeNT3qkXHk728dl7EwpTLqhPdvMi4",
  authDomain: "nusring-students.firebaseapp.com",
  projectId: "nusring-students",
  databaseURL: "?",
  storageBucket: "nusring-students.appspot.com",
  messagingSenderId: "190665283175",
  appId: "1:190665283175:web:9dfbfc73c56ab48a00a6c2",
  measurementId: "G-E3ZZQ51878",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);

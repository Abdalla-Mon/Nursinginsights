import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoApIaBL9mDgtj9yNhzx4wfryRa9BF2y4",
  authDomain: "nursing-insights.firebaseapp.com",
  projectId: "nursing-insights",
  storageBucket: "nursing-insights.appspot.com",
  messagingSenderId: "102592596920",
  appId: "1:102592596920:web:97872b1db48bbe7307dd4d",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);

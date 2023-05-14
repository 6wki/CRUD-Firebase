import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBufwZ59-tsTTBsnK90Oum9lIRg7VLzeDc",
  authDomain: "crud-58c57.firebaseapp.com",
  projectId: "crud-58c57",
  storageBucket: "crud-58c57.appspot.com",
  messagingSenderId: "579321049693",
  appId: "1:579321049693:web:b5c37f082139ab237fd3b4",
  measurementId: "G-SLC2MJK3R7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

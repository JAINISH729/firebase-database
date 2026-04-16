import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHeyFYCz2FFQia9s0vxnSw6WzjTyy6Mww",
  authDomain: "crud-01-19ad2.firebaseapp.com",
  databaseURL: "https://crud-01-19ad2-default-rtdb.firebaseio.com",
  projectId: "crud-01-19ad2",
  storageBucket: "crud-01-19ad2.firebasestorage.app",
  messagingSenderId: "800798597492",
  appId: "1:800798597492:web:235fffe44664bb64edcc21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
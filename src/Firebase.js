// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, doc, getDoc } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJmvbtcfs43lSDxbkBXH-rabxKZk6YHr8",
  authDomain: "blog-19422.firebaseapp.com",
  projectId: "blog-19422",
  storageBucket: "blog-19422.appspot.com",
  messagingSenderId: "479893141214",
  appId: "1:479893141214:web:9a9acb6843bfbbf7eff44f",
  measurementId: "G-JWXDTJVP60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
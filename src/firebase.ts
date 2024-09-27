import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';  // Add Realtime Database

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtlINREAlJH34DAIbGFc0pgNS1vL3svTE",

  authDomain: "blog-f4cda.firebaseapp.com",

  databaseURL: "https://blog-f4cda-default-rtdb.firebaseio.com",

  projectId: "blog-f4cda",

  storageBucket: "blog-f4cda.appspot.com",

  messagingSenderId: "605232530796",

  appId: "1:605232530796:web:a7cbb3853907ca6d13df49",

  measurementId: "G-8YFZV1BQGF"

};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
const realTimeDb = getDatabase(app);  // Initialize Realtime Database

// Export services for use in other files
export { signInWithEmailAndPassword, db, realTimeDb };

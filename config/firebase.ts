// Firebase Configuration
// To use this app, you need to:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project
// 3. Add a Web app to your project
// 4. Copy your Firebase config and replace the values below

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNjW7p8jMyBYVKTyHkhe9erzkEAvVsJ4c",
  authDomain: "travelapp-89136.firebaseapp.com",
  projectId: "travelapp-89136",
  storageBucket: "travelapp-89136.firebasestorage.app",
  messagingSenderId: "826071635960",
  appId: "1:826071635960:web:80142189b3949c5638e80d",
  measurementId: "G-9PEMG73MWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

export default app;

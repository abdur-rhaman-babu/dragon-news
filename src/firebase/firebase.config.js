// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGU77z9XvhgrZhLGIjO-1lT21bWy5b1P4",
  authDomain: "dragon-news-81414.firebaseapp.com",
  projectId: "dragon-news-81414",
  storageBucket: "dragon-news-81414.firebasestorage.app",
  messagingSenderId: "449855887925",
  appId: "1:449855887925:web:ec81c4bcbda01da4caaf7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myblog-dbdc4.firebaseapp.com",
  projectId: "myblog-dbdc4",
  storageBucket: "myblog-dbdc4.appspot.com",
  messagingSenderId: "579737111359",
  appId: "1:579737111359:web:0cacab411074e78e07618a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM3tIU8N5eDkflOi8uDbJp3n-MA_eF-1Y",
  authDomain: "otp-project-7ed35.firebaseapp.com",
  projectId: "otp-project-7ed35",
  storageBucket: "otp-project-7ed35.appspot.com",
  messagingSenderId: "220124017224",
  appId: "1:220124017224:web:fb76a24c62f71905bcde7d",
  measurementId: "G-YT0R1XQR7J"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

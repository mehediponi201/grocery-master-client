// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1npsByDSDWYrA1H_B-SBU3YaoZwk15xU",
  authDomain: "grocery-master-client.firebaseapp.com",
  projectId: "grocery-master-client",
  storageBucket: "grocery-master-client.appspot.com",
  messagingSenderId: "610453078129",
  appId: "1:610453078129:web:ff42fbd4adf2db55ef5bd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
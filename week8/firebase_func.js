// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKOFhMzNgHXPbeGMFca9LFThIVFAUdAkQ",
  authDomain: "ncu-app-test-bb863.firebaseapp.com",
  projectId: "ncu-app-test-bb863",
  storageBucket: "ncu-app-test-bb863.appspot.com",
  messagingSenderId: "967551369810",
  appId: "1:967551369810:web:b8e475114cf27d46dfd58b",
  measurementId: "G-XM5FLN19DH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
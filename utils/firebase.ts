// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcjQ9r3c-bvDsypQAJhSMz6doa0ISaJcE",
    authDomain: "dmas-application.firebaseapp.com",
    projectId: "dmas-application",
    storageBucket: "dmas-application.appspot.com",
    messagingSenderId: "327997106592",
    appId: "1:327997106592:web:5d0c24233f09ed12de9cc5",
    measurementId: "G-P1NXXPQ8XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }
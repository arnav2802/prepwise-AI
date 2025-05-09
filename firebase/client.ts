// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2PD3_ZOjRADh_0mbZyO0Fra9TzjwOr7w",
    authDomain: "prepwise-4a776.firebaseapp.com",
    projectId: "prepwise-4a776",
    storageBucket: "prepwise-4a776.firebasestorage.app",
    messagingSenderId: "160209986398",
    appId: "1:160209986398:web:3b48ef04591153fd3e25cf",
    measurementId: "G-J9EM6GZ66V"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
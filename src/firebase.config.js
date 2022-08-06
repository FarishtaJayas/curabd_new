// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { Timestamp } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDKx76fbVeBpRQvn7Bi3SNBCug85alQhWQ",
    authDomain: "hotelsandhospitals-9aa7b.firebaseapp.com",
    projectId: "hotelsandhospitals-9aa7b",
    storageBucket: "hotelsandhospitals-9aa7b.appspot.com",
    messagingSenderId: "173768648157",
    appId: "1:173768648157:web:d5a8670a1106723a0f8234",
    measurementId: "G-2KC1XDD5FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const auth = getAuth()
export const timeStamp = Timestamp
export const projectStorage = getStorage();
import {getAuth} from "firebase/auth";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, setDoc, doc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdCfCynA_TRwgD1MEVJIcgMAGF76YAnOg",
    authDomain: "first-one-d4032.firebaseapp.com",
    projectId: "first-one-d4032",
    storageBucket: "first-one-d4032.appspot.com",
    messagingSenderId: "312618323361",
    appId: "1:312618323361:web:ba0e66ae57a5c18c7fcfe0",
    measurementId: "G-B2BW16VTY2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Firebase authenticator
const auth = getAuth();
/*
const email = "silas@silas.dk";
const password = "pølse";
*/
function handleSignup () {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
            addUserToList(user.email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}
function handleLogin () {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#submit").addEventListener("click", handleSignup);
    document.querySelector("#login").addEventListener("click", handleLogin);
});

function addUserToList(email) {
    const userList = document.querySelector("ul"); // Assuming you have an <ul> element for the users
    const userItem = document.createElement("li");
    userItem.textContent = email;
    userList.appendChild(userItem);
}

import React from "react";
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "firebase/firestore";
import "firebase/auth";
import { Register } from "./registration";
import "../../styles/style.css";
import { Mainpage } from "./mainPage";


const firebaseConfig = {
  apiKey: "AIzaSyDvEvvDA1C1TkfdVDfzjmTLBM4O-FqXGjo",
  authDomain: "jpazda-messaging-app-c128f.firebaseapp.com",
  projectId: "jpazda-messaging-app-c128f",
  storageBucket: "jpazda-messaging-app-c128f.appspot.com",
  messagingSenderId: "115815751797",
  appId: "1:115815751797:web:2dbe6a5e020035bd17183c",
  measurementId: "G-6FM4B66WRP"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, 'messages');
getDocs(colRef)
  .then((snapshot) => {
    let messages = []
    snapshot.docs.forEach((doc) => {
      messages.push({ ...doc.data(), id: doc.id })
    })
    console.log(messages)
  })
  .catch((err) => {
    console.log(err.message)
  })


export const Home = () => {
  return (
    <div>
     <Mainpage />
    </div>
  );
};

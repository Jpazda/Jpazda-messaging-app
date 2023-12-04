import React from "react";
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "firebase/firestore";
import "firebase/auth";
import { Register } from "./registration";
import "../../styles/style.css";
import { Mainpage } from "./mainPage";
import { Sidebar } from "../component/sidebar";


// const db = getFirestore();
// const colRef = collection(db, 'messages');
// getDocs(colRef)
//   .then((snapshot) => {
//     let messages = []
//     snapshot.docs.forEach((doc) => {
//       messages.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(messages)
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })


export const Home = () => {
  return (
    <div className="home">
     <Mainpage />
    </div>
  );
};

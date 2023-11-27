import React from "react";
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SignIn from "src/js/views/signin.js";
import { ChatRoom } from "./chatroom";

const firebaseConfig = {
  apiKey: "AIzaSyCML9UV3MfRTbdCkARyZ8Xz6BkK2aGEUoE",
  authDomain: "jpazda-messaging-app.firebaseapp.com",
  projectId: "jpazda-messaging-app",
  storageBucket: "jpazda-messaging-app.appspot.com",
  messagingSenderId: "1028577701283",
  appId: "1:1028577701283:web:76ad0aed19abbba4377e16",
  measurementId: "G-VR8L8TLKJB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <header></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

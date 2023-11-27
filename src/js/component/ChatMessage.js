import { Firestore } from "firebase/firestore";
import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const auth = firebase.auth();
const firestore = firebase.firestore();

export const ChatMessage = () => {
const { text, uid } = props.message;

  return (
    <p>{text}</p>
  );
};

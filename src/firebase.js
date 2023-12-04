import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvEvvDA1C1TkfdVDfzjmTLBM4O-FqXGjo",
  authDomain: "jpazda-messaging-app-c128f.firebaseapp.com",
  projectId: "jpazda-messaging-app-c128f",
  storageBucket: "jpazda-messaging-app-c128f.appspot.com",
  messagingSenderId: "115815751797",
  appId: "1:115815751797:web:2dbe6a5e020035bd17183c",
  measurementId: "G-6FM4B66WRP",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

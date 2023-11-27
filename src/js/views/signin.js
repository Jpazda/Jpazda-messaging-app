import React from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const auth = firebase.auth();
const firebase = firebase.firestore();


export const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.signInWithGoogleAuthProvider();
    auth.signInWithPopUp(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

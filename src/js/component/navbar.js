import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router";

export const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("navbar", currentUser);

  return (
    <div className="navbar">
      <span className="logo">Easy Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="profile picture"></img>
        <span>{currentUser.displayName}</span>
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

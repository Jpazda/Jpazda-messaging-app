import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Easy Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="profile picture"
        ></img>
        <span>John</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

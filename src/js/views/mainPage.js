import React from "react";
import { Sidebar } from "../component/sidebar";
import { Chat } from "../component/chat";



export const Mainpage = () => {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <Chat />
    </div>
  );
};

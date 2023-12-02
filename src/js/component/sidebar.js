import React from "react";
import { Navbar } from "../component/navbar";
import { Search } from "../component/search";
import { Chats } from "../component/chats";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

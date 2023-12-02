import React from "react";
import { Messages } from "../component/messages";
import { Input } from "./input";

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <i className="fa-solid fa-camera"></i>
          <i className="fa-solid fa-user-group"></i>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

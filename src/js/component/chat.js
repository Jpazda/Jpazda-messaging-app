import React, { useContext } from "react";
import { Messages } from "../component/messages";
import { Input } from "./input";
import { ChatContext } from "../context/chatContext";

export const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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

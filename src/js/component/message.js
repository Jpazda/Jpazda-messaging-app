import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { ChatContext } from "../context/chatContext";

export const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  return (
    <div className="message owner">
      {/* <div className="messageInfo">
        <img
          src=
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div> */}
    </div>
  );
};

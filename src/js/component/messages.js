import React, { useContext, useEffect, useState } from "react";
import { Message } from "../component/message";
import { ChatContext } from "../context/chatContext";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../firebase";

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => unsub();
  }, [data.chatId]);
  console.log("logging messages from the messages component",messages);
  console.log("logging chatID from messages component", data.chatId);

  return (
    <div className="messages">
      {messages.map((message) => {
        return (
          <Message message={message} key={message.id}/>
          );
      })}
    </div>
  );
};

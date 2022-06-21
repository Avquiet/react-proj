import React from "react";
import { Message } from "../Message/message";

export const MessageList = ({ messages }) => {
  return ( 
    <div>
      {messages.map((mes) => (
        <div>
          <Message key={mes.id} message={mes}/>
        </div>
      ))}
    </div>
  );
};

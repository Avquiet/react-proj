import React from "react";
import { useEffect, useRef } from 'react'
import {v4 as uuid} from 'uuid';

export const Message = ({ message }) => {

  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
      
  useEffect(() => {
    scrollToBottom()
  }, [message]);

  return (
    <div style={{ marginLeft: 40 }}>
      <div className="msg-list" key={ uuid() }>
        <p className="author-text">{message.author}</p>
          <p className="list-text">{message.text}</p>
      </div>
    
      <div ref={messagesEndRef} />
    </div>
  )
}

import React from "react";
import { useEffect, useRef } from 'react'

 export const MessageList = ({ messages }) => {

        const messagesEndRef = useRef(null)
      
        const scrollToBottom = () => {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      
        useEffect(() => {
          scrollToBottom()
        }, [messages]);

    return (
        <div>
            {messages.map((list, id) => (
                <div className="msg-list" key={id}>
                    <p className="author-text">{list.author}</p>
                    <p className="list-text">{list.text}</p>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
 }

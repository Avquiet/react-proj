import React from "react";
import { useEffect, useRef } from 'react'
import {v4 as uuid} from 'uuid';

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
            {messages.map((list) => (
                <div className="msg-list" key={ uuid() }>
                    <p className="author-text">{list.author}</p>
                    <p className="list-text">{list.text}</p>
                </div>
                
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
 }

import React from "react";


 export const MessageList = ({ messages }) => {
    return (
        <div>
            {messages.map((list) => (
                <div key={list.id}>
                    <p className="author-text">{list.author}</p>
                    <p className="list-text">{list.text}</p>
                </div>
            ))}
        </div>
    )
 }

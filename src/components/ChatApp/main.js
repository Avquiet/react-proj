
import { useCallback, useEffect, useState } from 'react';
import './chat.css';
import { GoodMessages } from '../Forms';
import { MessageList } from '../Message';
import { authors } from '../../utils/constants';
import { RenderChats } from '../ChatList/main';
import { Navigate, useParams } from "react-router";

const initialMessages = {
  c1: [
    {
      author: authors.user,
      text: 'Hello, welcome to the group-1'
    }
  ],
  c2: [
    {
      author: authors.user,
      text: 'Hello, welcome to the group-2'
    }
  ],
  c3: [
    {
      author: authors.user,
      text: 'Hello, welcome to the group-3'
    }
  ],
  c4: [
    {
      author: authors.user,
      text: 'Hello, welcome to the group-4'
    }
  ],
  c5: [
    {
      author: authors.user,
      text: 'Hello, welcome to the group-5'
    }
  ]
};

function Chat() {

  const { chatId } = useParams();

  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = useCallback (
    (newMessage) => {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [chatId]: [...prevMessages[chatId], newMessage],
      }));
    }, [chatId]
  );   
  useEffect(() => {
    if (messages[chatId]?.length && messages[chatId]?.[messages[chatId]?.length - 1].author !== authors.bot) {

      const timeout = setTimeout(() => handleSendMessage({
        author: authors.bot,
        text: "Hello dear USER please write any message",
        id: `list-${Date.now()}`
      }),
      2500);
      
      return () => clearTimeout(timeout);
    };
    
  });

  if (!messages[chatId]) {
    return <Navigate replace to="/chats/" />
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="item-chat">
            <h3 className="text-list">Chat List</h3>
            <RenderChats />
        </div> 
            <MessageList messages={messages[chatId]}/>
      </header>
      <main className="App-main">
        <GoodMessages onlyMessages={handleSendMessage}/>
      </main>
    </div>
  );
}

export default Chat;


import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { GoodMessages } from './components/Forms';
import { MessageList } from './components/Message';
import { authors } from './utils/constants.js';
import  { RenderChats } from './components/ChatLists'

function App() {

  const otherMessages = [
    {
      author: authors.user,
      text: 'Hello'
    }
  ];
  
  const [msg, setMsg] = useState(otherMessages);

  const handleSendMsg = useCallback ((startMsg) => {
    setMsg((prevMsg) => [...prevMsg, startMsg]);
  }, []);

  useEffect(() => {
    if (msg.length && msg[msg.length - 1].author !== authors.bot) {
      const isTime = setTimeout(() => handleSendMsg({
        author: authors.bot,
        text: "Hello dear USER please write any message",
        id: `list-${Date.now()}`
      }),
      2500);
      
      return () => clearTimeout(isTime);
    };
    
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="item-chat">
            <h3 className="text-list">Chat List</h3>
            <RenderChats />
        </div> 
            <MessageList messages={msg}/>
      </header>
      <main className="App-main">
        <GoodMessages onlyMessages={handleSendMsg}/>
      </main>
    </div>
  );
}
export default App;

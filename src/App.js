
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Msgl } from './components/Forms';
import { MessageList } from './components/Message';
import { authors } from './utils/constants.js'

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
        id: `msg-${Date.now()}`
      }),
      2500);
      
      return () => clearTimeout(isTime);
    };
    
  });
  
  return (
    <div className="App">
      <header className="App-header">
      <MessageList messages={msg}/>
      <Msgl onlyMessages={handleSendMsg}/>
      </header>
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import { Message } from './components/message';
import { useState } from 'react';


function App() {

  const [word, setText] = useState("Will you click? ?");

  const goodClick = () => {
    console.log("clicked");
    setText("071" + Math.random());
  };
  return (
    <div className="App">
      <header className="App-header">
        <Message message={word} onMessageClick={goodClick} />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

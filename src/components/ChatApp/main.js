
import { useCallback, useEffect } from 'react';
import './chat.css';
import { connect } from 'react-redux'
import { GoodMessages } from '../Forms';
import { MessageList } from '../message';
import { authors } from '../../utils/constants';
import { RenderChats } from '../ChatList/main';
import { Navigate, useParams } from "react-router";
import { addMessage } from "../../store/messages/actions";

function Chat({ messages, sendMessage }) {

  const { chatId } = useParams();
  const handleSendMessage = useCallback(
    (newMessage) => {

      
      sendMessage(chatId, newMessage);
    },
    [chatId, sendMessage]
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
  
  }, [messages]);

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


const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = {
  sendMessage: addMessage,
};

export const ConnectedChats = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
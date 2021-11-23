
import { useCallback } from 'react';
import './chat.css';
import { connect } from 'react-redux'
import { GoodMessages } from '../Forms';
import { MessageList } from '../message';
import { RenderChats } from '../ChatList/main';
import { Navigate, useParams } from "react-router";
import { addMessageWithThunk } from "../../store/messages/actions";

function Chat({ messages, sendMessage }) {

  const { chatId } = useParams();
  const handleSendMessage = useCallback(
    (newMessage) => { 
      sendMessage(chatId, newMessage);
    },
    [chatId, sendMessage]
  );

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
  sendMessage: addMessageWithThunk,
};

export const ConnectedChats = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
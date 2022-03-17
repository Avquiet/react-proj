import { useCallback } from 'react';
import './chat.css';
import { useDispatch } from 'react-redux'
import { GoodMessages } from '../Forms';
import { MessageList } from '../MessageList/MessageList';
import { RenderChats } from '../ChatList/main';
import { Navigate, useParams } from "react-router";
import { addMessageWithReply } from "../../store/messages/actions";

function Chat({ msgs }) {
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const handleSendMessage = useCallback(
    (newMessage) => { 
      dispatch(addMessageWithReply(chatId, newMessage));
    //  sendMessage(chatId, newMessage);
    //  push(getChatMsgsListRefById(chatId), newMessage);
    },
    [chatId, dispatch]
  );

  if (!msgs[chatId]) {
    return <Navigate replace to="/chats/" />
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="item-chat">
            <h3 className="text-list">Chats</h3>
            <RenderChats />
        </div> 
            <MessageList messages={msgs[chatId]}/>
      </header>
      <main className="App-main">
        <GoodMessages onlyMessages={handleSendMessage}/>
      </main>
    </div>
  );
}

export default Chat;


// const mapStateToProps = (state) => ({
//   messages: state.messages,
// });

// const mapDispatchToProps = {
//   sendMessage: addMessageWithReply,
// };

// export const ConnectedChats = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Chat);
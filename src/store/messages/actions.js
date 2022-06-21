import { authors } from '../../utils/constants';
import { remove } from "firebase/database";
import { getChatMsgsListRefById } from "../../services/firebase";
import { push } from "firebase/database";

export const ADD_MSG = 'MESSAGES::ADD_MSG'
export const DELETE_MSG = "MESSAGES::DELETE_MSG";

export const addMessage = (chatId, message) => ({
    type: ADD_MSG,
    payload: {chatId, message}
})

export const deleteMessage = (chatId, idToDelete) => ({
    type: DELETE_MSG,
    payload: {
      chatId,
      idToDelete,
    },
  });

let timeout;

export const addMessageWithReply = (chatId, message) => (dispatch) => {
  dispatch(addMessage(chatId, message));
  push(getChatMsgsListRefById(chatId), message);

  if (message.author !== authors.bot) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      const botMessage = {
        author: authors.bot,
        id: `list-${Date.now()}`,
        text: "Hello, dear user!",
      };
      dispatch(addMessage(chatId, botMessage));
      push(getChatMsgsListRefById(chatId), botMessage);
    }, 3000);
  };
};

export const deleteMsgWithFb = (chatId, idToDelete) => async () => {
  remove(getChatMsgsListRefById(chatId, idToDelete));
};

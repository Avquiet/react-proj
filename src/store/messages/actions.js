import { authors } from '../../utils/constants';


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

export const addMessageWithThunk = (chatId, message) => (dispatch) => {
    dispatch(addMessage(chatId, message));

    if (message.author !== authors.bot) {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
           const botMsg = {
            author: authors.bot,
            text: "Hello dear USER please write any message",
            id: `list-${Date.now()}`
          }
          dispatch(addMessage(chatId, botMsg))
        },  3000);
    }
}
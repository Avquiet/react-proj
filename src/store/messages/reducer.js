import { ADD_MSG } from './actions';
import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";

const otherMessages = {}

export const messagesReducer = (state = otherMessages, { payload, type }) => {
  switch (type) {
    case ADD_MSG:
      return {
        ...state,
        [payload.chatId]: [...state[payload.chatId], payload.message],
      };

    case ADD_CHAT:
      return {
        ...state,
        [payload.id]: [],
      };
    case DELETE_CHAT: {
      const newMessages = { ...state };
      delete newMessages[payload.chatId];

      return newMessages;
    }
    default:
      return state;
  }
};
export const ADD_MSG = 'MESSAGES::ADD_MSG'
export const DELETE_MSG = "MESSAGES::DELETE_MSG";

export const addMessage = (chatId, message) => ({
    type: ADD_MSG,
    payload: {chatId, message}
})
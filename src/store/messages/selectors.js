export const selectMessages = (state) => state.messages;

export const createMessageForChat = (chatId) => (state) =>
    state.messages[chatId]
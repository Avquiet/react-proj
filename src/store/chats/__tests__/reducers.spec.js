import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from "../actions";
import { chatsReducer } from '../reducer';
 
describe("chatsReducer", () => {
    it("adding chats", () => {
        const state = [];

        const received = chatsReducer(state, ADD_CHAT, DELETE_CHAT, SET_CHATS)
        expect(state).toMatchSnapshot(received);
    });
});
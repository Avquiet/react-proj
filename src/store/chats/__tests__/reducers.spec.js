import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from "../actions";
import { chatsReducer } from '../reducer';
 
describe("chatsReducer", () => {
    it("adding chats", () => {
        const state = [];
        const type = {
            ADD_CHAT,
            DELETE_CHAT,
            SET_CHATS
        };

        const received = chatsReducer(state, type)
        expect(state).toMatchSnapshot(received);
    });
});
import React from "react";
import { Message } from "../Message/message";
import { useDispatch } from "react-redux";
import { deleteMsgWithFb } from "../../store/messages/actions"

export const MessageList = ({ messages }) => {
    // const dispatch = useDispatch();
    // const handleDeleteMsg = () => {
    //     dispatch(deleteMsgWithFb(messages.id))
    // };

    return ( 
        <div>
            {messages.map((mes) => (
                <div>
                    <Message key={mes.id} message={mes}/>
                    {/* <button type="submit" onClick={handleDeleteMsg}>delete</button> */}
                </div>
            ))}
        </div>
    );
};

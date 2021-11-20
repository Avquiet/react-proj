import {v4 as uuid} from 'uuid';
import * as React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import List from '@mui/material/List';
import { ListItem, TextField, Button } from '@mui/material';
import { ChatItem } from "../ChatItem/main";


export const RenderChats = () => {

    const chatList = useSelector(selectChats);
    const dispatch = useDispatch()
    const [value, setValue] = useState("");
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault()

        const newId = `chat${Date.now()}`;
        dispatch(addChat({ name: value, id: newId }));
    
        setValue("");
    }

    return (
        <div>
            {chatList.map((chat) => (
                <List className="child-list" key={ uuid() } sx={{
                    textDecoration: 'none',
                    border: '1px solid teal',
                    marginBottom: '4px',
                    borderLeft: 'none',
                    height: '80px',
                    }}>
                        <ListItem>
                            <ChatItem chat={chat} />
                        </ListItem>      
                </List>
            ))}

            <form onSubmit={handleSubmit}>
                <TextField value={value} onChange={handleChange} />
                <Button variant='contained' type="submit" className="other-but" disabled={!value}>Add chat</Button>
            </form>
        </div>
    ) 
}
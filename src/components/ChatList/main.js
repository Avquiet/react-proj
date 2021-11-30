import {v4 as uuid} from 'uuid';
import * as React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChats } from "../../store/chats/selectors";
import List from '@mui/material/List';
import { ListItem, TextField, Button, Dialog, DialogTitle } from '@mui/material';
import { ChatItem } from "../ChatItem/main";
import { onValue, set } from "firebase/database";
import {
  addChat,
  addChatWithFb,
  initChatsTracking,
} from "../../store/chats/actions";
import {
  chatsRef,
  getChatMsgsRefById,
  getChatRefById,
} from "../../services/firebase";


export const RenderChats = () => {

    const chatList = useSelector(selectChats);
    const dispatch = useDispatch()
    const [value, setValue] = useState("");
    
    useEffect(() => {
        dispatch(initChatsTracking())
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }


    const [visible, setVisible] = useState(false);
    const handleClose = () => setVisible(false);
    const handleOpen = () => setVisible(true);
    const handleChange = (e) => setValue(e.target.value);
    const onAddChat = () => {
        const newId = `chat${Date.now()}`;
        dispatch(addChatWithFb({ name: value, id: newId }));
        setValue("");
        handleClose();
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
            <Button variant="contained" onClick={handleOpen}>
                Add the new chat
            </Button>
            <form onSubmit={handleSubmit}>
                <Dialog open={visible} onClose={handleClose}>
                    <DialogTitle>Please enter a name for new chat</DialogTitle>
                    <TextField autoFocus value={value} onChange={handleChange} />
                    <Button variant="contained" type="submit" onClick={onAddChat} disabled={!value}>
                        ADD
                    </Button>
                </Dialog>
            </form>
        </div>
    )
}
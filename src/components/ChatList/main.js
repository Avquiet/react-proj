import { NavLink } from "react-router-dom";
import {v4 as uuid} from 'uuid';
import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export const RenderChats = () => {
    

    const [listOfChat, setArr] = useState(
        [
            {
                name: 'GROUP-ONE',
                id: 'c1'
            },
            {
                name: 'GROUP-TWO',
                id: 'c2'
            },
            {
                name: 'GROUP-THREE',
                id: 'c3'
            },
            {
                name: 'GROUP-FOUR',
                id: 'c4'
            },
            {
                name: 'GROUP-FIVE',
                id: 'c5'
            }
        ]
    );
    
    const removeItem = id => {
        setArr(prevState => prevState.filter(el => el.id !== id ))
    }

    const [value] = useState('')

    return (
        <div>
            <button className="other-but" onClick={ () => setArr([...listOfChat, value]) }>Add the chat</button>

            {listOfChat.map((roster) => (
                <List className="child-list" key={ uuid() } sx={{
                    textDecoration: 'none',
                    border: '1px solid teal',
                    marginBottom: '4px',
                    borderLeft: 'none',
                    height: '80px',
                    }}>
                    <>
                        <ListItem>
                            <NavLink 
                              className="chat-load"
                              to={`/chats/${roster.id}`}
                              style={({ isActive }) => ({ color: isActive ? "grey" : "teal" })}>
                                <ListItemText primary={roster.name}  secondary='another'/>
                            </NavLink>
                            <button
                                className="other-but"
                                removeItem={removeItem} 
                                onClick={ () => removeItem(roster.id)} 
                                >Delete
                            </button>
                        </ListItem>
                    </>      
                </List>
            ))}
        </div>
    ) 
}
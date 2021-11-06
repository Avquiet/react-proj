import {v4 as uuid} from 'uuid';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

 const listOfChat = [
    {
        name: 'GROUP-ONE',
        id: '1'
    },
    {
        name: 'GROUP-TWO',
        id: '2'
    },
    {
        name: 'GROUP-THREE',
        id: '3'
    },
    {
        name: 'GROUP-FOUR',
        id: '4'
    },
    {
        name: 'GROUP-FIVE',
        id: '5'
    }
]

export const RenderChats = () => {
    return listOfChat.map(roster => {
        return (
            <List className="child-list" key={ uuid() } sx={{
                border: '2px solid #fff',
                marginBottom: '4px',
                borderLeft: 'none'
                }}>
                <ListItem>
                    <ListItemText primary={roster.name} secondary="years ago"/>
                </ListItem>
            </List>
        )
    })
}



import { ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux"
import { deleteChat } from "../../store/chats/actions";
import { Button, Dialog, DialogTitle, DialogActions } from '@mui/material';
import { useState } from "react";


export const ChatItem = ({ chat }) => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);


  const handleDeleteClick = () => {
    dispatch(deleteChat(chat.id))
    handleClose()
  };

  return (
    <>
      <ListItem>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "brown" : "teal" })}
          to={`/chats/${chat.id}`}
        >
          <h3>{chat.name}</h3>
        </NavLink>
      </ListItem>
      <Button variant="contained" onClick={handleOpen}>
        delete
      </Button>
      
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>You want to delete this?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" type="submit" onClick={handleDeleteClick}>Delete</Button>
        </DialogActions>
      </Dialog>
   </>
  );
};
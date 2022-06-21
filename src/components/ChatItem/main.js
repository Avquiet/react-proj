import { ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Dialog, DialogTitle, DialogActions } from '@mui/material';
import { useState } from "react";
import { deleteChatWithFb } from "../../store/chats/actions";
import DeleteIcon from '@mui/icons-material/Delete';


export const ChatItem = ({ chat }) => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);


  const handleDeleteClick = () => {
    dispatch(deleteChatWithFb(chat.id))
    handleClose()
  };

  return (
    <>
      <ListItem>
        <NavLink className="link-item"
          style={({ isActive }) => ({ color: isActive ? "brown" : "teal", textDecoration: 'none' })}
          to={`/chats/${chat.id}`}
        >
          <h4>{chat.name}</h4>
        </NavLink>
      </ListItem>
      <Button sx={{ padding: 0 }} variant="contained" onClick={handleOpen} type="submit">
        <DeleteIcon />
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
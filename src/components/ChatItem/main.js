import { ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux"
import { deleteChat } from "../../store/chats/actions";


export const ChatItem = ({ chat }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteChat(chat.id))
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
      <button class="other-but" onClick={handleDeleteClick}>Delete</button>
    </>
  );
};
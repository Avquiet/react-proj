import React from 'react';
import { Link } from "react-router-dom";

export const LinkItem = () => {
    return <ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/chats">Chats</Link>
    </li>
    <li>
        <Link to="/profile">Profile</Link>
    </li>
</ul>
}
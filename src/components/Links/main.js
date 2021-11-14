import React from 'react';
import { Link } from "react-router-dom";

export const LinkItem = () => {
    return <ul className="hash-main">
    <li>
        <Link className="hash-child" to="/">Home</Link>
    </li>
    <li>
        <Link className="hash-child" to="/chats">Chats</Link>
    </li>
    <li>
        <Link className="hash-child" to="/profile">Profile</Link>
    </li>
</ul>
}
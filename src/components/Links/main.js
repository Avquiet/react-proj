import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { RenderChats } from "../ChatList/main";
import { ConnectedChats } from "../ChatApp/main";
import { Home } from "../Home/main";
import { ConnectedProfile } from "../Profile/main";

export const LinkItem = () => (
    
    <BrowserRouter>
        <ul className="hash-main">
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
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="chats">
                <Route index element={ <RenderChats /> } />
                <Route path=":chatId" element={ <ConnectedChats />} />
            </Route>
            <Route path="/profile" element={ <ConnectedProfile />} />
            <Route path="*" element={
                <h3>Page Not Found
                <h1>404</h1>
                </h3>} />
        </Routes>
    </BrowserRouter>
);
import React from 'react';
import { LinkItem } from './components/Links/main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import  Chat from './components/ChatApp/main';
import { Home } from './components/Home/main';
import { Profile }  from './components/Profile/main';
import { RenderChats } from './components/ChatList/main';

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <LinkItem />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="chats">
                    <Route index element={ <RenderChats />} />
                    <Route path=":chatId" element={ <Chat /> } />
                </Route>
                <Route path="/profile" element={ <Profile />} />
                <Route path="*" element={
                    <h3>Page Not Found
                    <h1>404</h1>
                    </h3>} />
            </Routes>
        </BrowserRouter>
    </Provider>
)
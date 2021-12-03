import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { RenderChats } from "../ChatList/main";
import { ConnectedChats } from "../ChatApp/main";
import { Home } from "../Home/main";
import { Articles } from "../Articles/main";
import { ConnectedProfile } from "../Profile/main";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onValue } from "firebase/database";
import { PrivateRoute } from "../PrivateRoute/main";
import { PublicOutlet } from "../PublicRoute/main";
import { auth, messagesRef } from "../../services/firebase";
import { signIn, signOut } from "../../store/profile/actions";
import { SignUp } from "../SignUp/main";

export const LinkItem = () => {
    const dispatch = useDispatch();
    const [msgs, setMsgs] = useState({});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn());
            } else {
                dispatch(signOut());
            }
        });

        return () => unsubscribe();
    }, []);


    useEffect(() => {
        onValue(messagesRef, (snapshot) => {
            const newMsgs = {};

            snapshot.forEach((chatMsgsSnap) => {
                newMsgs[chatMsgsSnap.key] = Object.values(
                    chatMsgsSnap.val().messageList || {}
                );
            });

            setMsgs(newMsgs);
        });
    }, []);
    
    return (
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
            <li>
                <Link className="hash-child" to="/articles">Articles</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/" element={<PublicOutlet />}>
            <Route path="" element={<Home />} />
        </Route>
        <Route path="/signup" element={<PublicOutlet />}>
          <Route path="" element={<SignUp />} />
        </Route>
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <ConnectedProfile />
            </PrivateRoute>
          }
        />
        <Route path="articles" element={<Articles />} />
        <Route path="chats">
          <Route
            index
            element={
              <PrivateRoute>
                <RenderChats />
              </PrivateRoute>
            }
          />
          <Route
            path=":chatId"
            element={
              <PrivateRoute>
                <ConnectedChats msgs={msgs} />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>

    )
};
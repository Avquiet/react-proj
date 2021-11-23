import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { chatsReducer } from "./chats/reducer";
import { profileReducer } from "./profile/reducer";
import { messagesReducer } from "./messages/reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const config = {
    key: 'root', 
    storage
  }

  const persistedReducer = persistReducer(
    config,
    combineReducers({
      chats: chatsReducer,
      profile: profileReducer,
      messages: messagesReducer
    }),
    );

  export const store = createStore (
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  )

  export const persistor = persistStore(store)
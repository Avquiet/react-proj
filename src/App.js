import React from "react";
import { Provider } from "react-redux";
import { LinkItem } from "./components/Links/main";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <LinkItem />
    </Provider>  
  )
}
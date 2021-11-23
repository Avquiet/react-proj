import React from "react";
import { Provider } from "react-redux";
import { LinkItem } from "./components/Links/main";
import {persistor, store } from "./store";
import { CircularProgress } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react'

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <LinkItem />
      </PersistGate>
    </Provider>  
  )
}
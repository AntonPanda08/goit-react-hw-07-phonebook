import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Phonebook from "./App";
import store from "../src/redux/store";
ReactDOM.render(
  <Provider store={store}>
    <Phonebook />
  </Provider>,
  document.querySelector("#root")
);

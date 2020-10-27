import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactAction from "./contactAction";

const addContact = (state, action) => {
  return [...state, action.payload];
};
const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};
const items = createReducer([], {
  [contactAction.fetchContactSuccess]: (state, action) => action.payload,
  [contactAction.addContactSuccess]: addContact,
  [contactAction.removeContactSuccess]: removeContact,
});

const filter = createReducer("", {
  [contactAction.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducer";

const defaultMiddleware = getDefaultMiddleware();
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: [...defaultMiddleware],
});
export default store;

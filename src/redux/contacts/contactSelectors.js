import { createSelector } from "@reduxjs/toolkit";
const getContactsArray = (state) => state.contacts.items;
const getContactsLength = (state) => getContactsArray(state).length;
const getFilter = (state) => state.contacts.filter;
const getVisibleContacts = createSelector(
  [getContactsArray, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
);
export default {
  getContactsArray,
  getContactsLength,
  getFilter,
  getVisibleContacts,
};

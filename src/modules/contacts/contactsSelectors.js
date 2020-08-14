import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getError = (state) => state.contacts.error;
const getLoading = (state) => state.contacts.loading;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);

const getContactById = createSelector(
  [(_, id) => id, getContacts],
  (contactId, contacts) => contacts.find(({ id }) => id === contactId)
);

export default {
  getContacts,
  getFilter,
  getError,
  getLoading,
  getVisibleContacts,
  getContactById,
};

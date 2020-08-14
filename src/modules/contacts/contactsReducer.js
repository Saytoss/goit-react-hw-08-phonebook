import { createReducer, combineReducers } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";
import authActions from "../auth/authActions";

const initialState = {
  contacts: {
    items: [],
    filter: "",
    isLoading: false,
    error: "",
  },
};

const getContacts = (_, { payload }) => {
  return [...payload];
};
const addContact = (state, { payload }) => [payload, ...state];
const deleteContact = (state, { payload }) =>
  state.filter(({ id }) => id !== payload);

const items = createReducer(initialState.contacts.items, {
  [contactsActions.getContactsSuccess]: getContacts,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.deleteContactSuccess]: deleteContact,
  [authActions.logoutSuccess]: () => initialState.contacts.items,
});

const filter = createReducer(initialState.contacts.filter, {
  [contactsActions.filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(initialState.contacts.isLoading, {
  [contactsActions.getContactsRequest]: () => true,
  [contactsActions.getContactsSuccess]: () => false,
  [contactsActions.getContactsError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

const error = createReducer(initialState.contacts.error, {
  [contactsActions.getContactsError]: (_, { payload }) => payload,
  [contactsActions.addContactError]: (_, { payload }) => payload,
  [contactsActions.deleteContactError]: (_, { payload }) => payload,
  [contactsActions.toggleError]: () => "",
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

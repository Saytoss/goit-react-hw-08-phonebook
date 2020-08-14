import { createAction } from "@reduxjs/toolkit";

const getContactsRequest = createAction("contacts/getRequest");
const getContactsSuccess = createAction("contacts/getSuccess");
const getContactsError = createAction("contacts/getError");

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const deleteContactRequest = createAction("contacts/deleteRequest");
const deleteContactSuccess = createAction("contacts/deleteSuccess");
const deleteContactError = createAction("contacts/deleteError");

const filterContacts = createAction("contacts/filter");

const toggleError = createAction("contacts/toggleError");

export default {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
  toggleError,
};

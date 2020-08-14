import axios from "axios";
import contactsActions from "./contactsActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const getContacts = () => (dispatch) => {
  dispatch(contactsActions.getContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.getContactsSuccess(data)))
    .catch(({ message }) =>
      dispatch(contactsActions.getContactsError(message))
    );
};

const addContact = (credentials) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", credentials)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(({ message }) => dispatch(contactsActions.addContactError(message)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(contactsActions.deleteContactRequest(id));

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch(({ message }) =>
      dispatch(contactsActions.deleteContactError(message))
    );
};

export default {
  getContacts,
  addContact,
  deleteContact,
};

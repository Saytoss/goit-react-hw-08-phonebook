import { connect } from "react-redux";
import {
  contactsSelectors,
  contactsActions,
  contactsOperations,
} from "../../modules/contacts";
// import ContactForm from "./ContactForm";
import ContactForm from "./ContactFormFormik";

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  showNotif: contactsActions.addContactError,
  addContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

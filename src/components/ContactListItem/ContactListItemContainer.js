import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../modules/contacts";
import ContactListItem from "./ContactListItem";

const mapStateToProps = (state, ownProps) => {
  const item = contactsSelectors.getContactById(state, ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickDelete: () => dispatch(contactsOperations.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);

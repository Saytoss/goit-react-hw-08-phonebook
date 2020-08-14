import { connect } from "react-redux";
import { contactsActions, contactsSelectors } from "../../modules/contacts";
import Filter from "./Filter";

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

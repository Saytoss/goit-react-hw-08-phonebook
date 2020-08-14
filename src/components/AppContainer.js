import { connect } from "react-redux";
import { authOperations, authSelectors } from "../modules/auth";
import { contactsSelectors } from "../modules/contacts";
import App from "./App";

const mapStateToProps = (state) => ({
  userName: authSelectors.getUserName(state),
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

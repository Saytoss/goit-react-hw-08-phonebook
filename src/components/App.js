import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Appbar from "../common/Appbar/Appbar";
import Content from "./Content/Content";
import Notification from "../common/Notification";

const App = ({ error, onGetCurrentUser, onClearToken }) => {
  useEffect(() => {
    onGetCurrentUser();
  }, [onGetCurrentUser]);
  return (
    <>
      <Appbar />
      <Content />
      {error && <Notification />}
    </>
  );
};

App.propTypes = {
  error: PropTypes.string.isRequired,
  onGetCurrentUser: PropTypes.func.isRequired,
};

export default App;

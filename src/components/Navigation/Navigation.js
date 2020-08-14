import React from "react";
import { NavLink } from "react-router-dom";
import withAuth from "../hoc/withAuth";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";

function Navigation({ isAuthenticated }) {
  return (
    <div className={styles.nav}>
      <NavLink
        to="/"
        exact
        className={styles.list_link}
        activeClassName={styles.list_activeLink}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={styles.list_link}
          activeClassName={styles.list_activeLink}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}

Navigation.propTypes = {
  isAuthenticated: PropTypes.string,
};

export default withAuth(Navigation);

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

function AuthNav() {
  return (
    <div className={styles.auth_nav}>
      <NavLink
        to="/registration"
        exact
        className={styles.list_link}
        activeClassName={styles.list_activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.list_link}
        activeClassName={styles.list_activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}

export default AuthNav;

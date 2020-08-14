import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../../modules/auth";
import Button from "@material-ui/core/Button";
import styles from "./UserMenu.module.css";

function UserMenu({ avatar, name, isLoading, onLogout }) {
  return (
    <>
      {!isLoading && (
        <div className={styles.userMenu_container}>
          <img className={styles.userMenu_img} src={avatar} alt="avatar" />
          <p className={styles.userMenu_text}>Welcome {name} </p>
          <Button
            type="button"
            onClick={onLogout}
            variant="contained"
            color="primary"
          >
            LogOut
          </Button>
        </div>
      )}
    </>
  );
}

UserMenu.defaultProps = {
  avatar:
    "https://99px.ru/cms/temp/module_temp1/image1_1030820092507595390x90.gif",
};

UserMenu.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  isLoading: authSelectors.getLoader(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

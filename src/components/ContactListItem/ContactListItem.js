import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import styles from "./ContactListItem.module.css";

function ContactListItem({ id, name, number, onClickDelete }) {
  return (
    <li key={id} className={styles.item}>
      <span className={styles.name}>{name}: </span>
      <span>{number}</span>
      <Button
        type="button"
        onClick={onClickDelete}
        variant="contained"
        color="secondary"
      >
        delete
      </Button>
    </li>
  );
}
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
export default ContactListItem;

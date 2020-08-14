import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

function Filter({ contacts, filter, onChangeFilter }) {
  return (
    <>
      {contacts.length > 1 && (
        <label className={styles.label}>
          Find contact by name
          <input
            type="text"
            value={filter}
            onChange={(e) => onChangeFilter(e.target.value)}
            className={styles.input}
          />
        </label>
      )}
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Filter;

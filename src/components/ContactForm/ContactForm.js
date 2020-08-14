import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

class ContactForm extends Component {
  static propTypes = {
    showNotif: PropTypes.func.isRequired,
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();

    this.checkContact(name, number);

    this.setState({
      name: "",
      number: "",
    });
  };

  checkContact = (name, number) => {
    const { showNotif, addContact } = this.props;

    if (!name) {
      showNotif("Please enter some information");
      return;
    }
    if (!number) {
      showNotif("Please enter contact phone number");
      return;
    }

    this.hasContact(name)
      ? showNotif(`${name} is already in contacts`)
      : addContact(name, number);
  };

  hasContact = (someName) =>
    this.props.contacts.some((contact) => contact.name === someName);

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Phone
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;

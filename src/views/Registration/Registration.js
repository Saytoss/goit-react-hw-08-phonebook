import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../modules/auth";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import styles from "./Registration.module.css";

const initialState = {
  name: "",
  email: "",
  password: "",
};

class Registration extends Component {
  state = initialState;

  handleInputChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister({ ...this.state });
    this.setState(initialState);
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <form className={styles.registrationForm} onSubmit={this.handleSubmit}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleInputChange}
            label="Name"
            required
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleInputChange}
            label="Email"
            required
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleInputChange}
            label="Password"
            placeholder="Enter your password"
            required
          />
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  Registration
);

import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../modules/auth";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import styles from "./Login.module.css";

const initialState = {
  email: "",
  password: "",
};

class Login extends Component {
  state = initialState;

  handleInputChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState(initialState);
  };

  render() {
    const { email, password } = this.state;

    return (
      <form className={styles.loginForm} onSubmit={this.handleSubmit}>
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
          Login
        </Button>
      </form>
    );
  }
}
export default connect(null, { onLogin: authOperations.login })(Login);

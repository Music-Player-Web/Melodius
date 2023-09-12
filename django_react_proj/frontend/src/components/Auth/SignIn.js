import React, { Component } from "react";
import { login } from "../../utilities/users-service";
import './SignIn.css';

class SignIn extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    error: null,
  };

  handleChange = (evt) => {
    const credentials = {
      ...this.state.credentials,
      [evt.target.name]: evt.target.value,
    };
    this.setState({ credentials, error: null });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // Call the login function from users-service.js
      const user = await login(this.state.credentials);
      // Handle successful login (e.g., set user in state, redirect, etc.)
      this.props.setUser(user);
      // Navigate to Discover page
      this.props.onSuccess();
    } catch (error) {
      this.setState({ error: "Invalid credentials" });
    }
  };

  render() {
    const { credentials, error } = this.state;

    return (
      <div className="signin-container">
        <div class="box1">
          <span class="borderLine"></span>
          <form onSubmit={this.handleSubmit}>
            <h1>Log In</h1>
            {error && <p>{error}</p>}
            <div class="inputBox">
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={this.handleChange}
              />
              <span>Username</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={this.handleChange}
              />
              <span>Password</span>
              <i></i>
            </div>
            <div className="btn-primary">
              <input type="Submit" value="Log In"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;

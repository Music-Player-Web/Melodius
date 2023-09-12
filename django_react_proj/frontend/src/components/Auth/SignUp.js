import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUp.css';

class SignUp extends Component {
  state = {
    userData: {
      username: '',
      email: '', // Add the email field
      password: '',
    },
    error: null,
  };

  handleChange = (evt) => {
    const userData = {
      ...this.state.userData,
      [evt.target.name]: evt.target.value,
    };
    this.setState({ userData, error: null });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // Call the signUp function from users-service.js
      const user = await signUp(this.state.userData);
      // Handle successful sign up (e.g., redirect to login page)
      this.props.setUser(user);
      // Call the onSuccess function passed as a prop
      this.props.onSuccess();
    } catch (error) {
      this.setState({ error: 'Registration failed' });
    }
  };

  render() {
    const { userData, error } = this.state;

    return (

      <div className="sinup-container">
        <div class="box">
          <span class="borderLine"></span>
          <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            {error && <p>{error}</p>}
            <div class="inputBox">
              <input type="text"
                name="username"
                value={userData.username}
                onChange={this.handleChange} />
              <span>Username</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input type="email"
                name="email"
                value={userData.email}
                onChange={this.handleChange} />
              <span>Email</span>
              <i></i>
            </div>
            <div class="inputBox">
              <input type="password"
                name="password"
                value={userData.password}
                onChange={this.handleChange} />
              <span>Password</span>
              <i></i>
            </div>
            <div className="btn-primary">
              <input type="Submit" value="Sign Up"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;

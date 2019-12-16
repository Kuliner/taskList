import React from 'react';
import TextField from '@material-ui/core/TextField';
import ApiConfig from '../Config/ApiConfig';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailError: false,
      emailErrorText: '',
      password: '',
      passwordError: false,
      passwordErrorText: '',
      submitDisabled: true,
    };
  }

  validateEmail = (mail) => {
    if (/^\w+([.-] ?\w +)*@\w + ([.-] ?\w +)* (\.\w{ 2, 3 }) +$ /.test(mail)) {
      return (true);
    }
    return (false);
  }

  validatePassword = (password) => {
    if (password && password.length > 0) { return true; }
    return false;
  }

  onHandleChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;

    this.setState(change, () => {
      this.validateForm();
    });
  }

  sendData = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    fetch(ApiConfig.methods.login, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  validateForm() {
    const { email, password } = this.state;
    let error = false;

    if (!this.validateEmail(email)) {
      error = true;
      this.setState({ emailErrorText: 'Email bad', emailError: true });
    } else {
      this.setState({ emailErrorText: '', emailError: false });
    }

    if (!this.validatePassword(password)) {
      error = true;
      this.setState({ passwordErrorText: 'Password bad', passwordError: true });
    } else {
      this.setState({ passwordErrorText: '', passwordError: false });
    }

    if (error) {
      this.setState({ submitDisabled: true });
    } else {
      this.setState({ submitDisabled: false });
    }
  }

  render() {
    const {
      submitDisabled, emailErrorText, passwordErrorText, emailError, passwordError,
    } = this.state;
    return (
      <>
        <h3>Login</h3>
        <form onSubmit={this.sendData}>
          <div className="form-group">
            <TextField
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              error={emailError}
              helperText={emailErrorText}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <TextField
              type="password"
              className="form-control"
              placeholder="Password"
              error={passwordError}
              helperText={passwordErrorText}
              name="password"
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btnSubmit" disabled={submitDisabled} value="Login" />
          </div>
        </form>
      </>
    );
  }
}

export default Login;

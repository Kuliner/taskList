import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onHandleChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  sendData = () => {

  }

  render() {
    return (
      <div className="col-md-3 login-form-2">
        <h3>Login</h3>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Email *" value="" name="email" onChange={(event) => this.onHandleChange(event)} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Your Password *" value="" name="password" onChange={(event) => this.onHandleChange(event)} />
          </div>
          <div className="form-group">
            <input type="submit" className="btnSubmit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

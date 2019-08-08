import React, { Component } from "react";
import { Button } from "reactstrap";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onLogin = this.onLogin.bind(this);
  }

  componentDidMount() {
    this.onLogout();
  }

  componentDidUpdate() {
    this.onLogout();
  }
  onLogin = data => {
    // login user token to local store
    console.log("login succ");
    localStorage.setItem("token", "coderhome_admin");
  };

  onLogout = data => {
    console.log(" logout done !!!");
    localStorage.clear();
  };
  render() {
    return (
      <div className="container">
        <h1>Welcome to Coder HOme</h1>
        <Button color="primary" onClick={this.onLogin}>
          Login
        </Button>{" "}
      </div>
    );
  }
}

export default SignIn;

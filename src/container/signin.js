import React, { Component } from "react";
import { Button } from "reactstrap";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
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
      <div>
        <Button color="primary" onClick={this.onLogin}>
          Login
        </Button>{" "}
        <Button color="secondary">Cancle</Button>{" "}
        <Button color="danger" onClick={this.onLogout}>
          Logout
        </Button>{" "}
      </div>
    );
  }
}

export default SignIn;

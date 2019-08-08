import React, { Component } from "react";
import { TabMenu } from "primereact/tabmenu";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
//import "primeicons/primeicons.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({
        isUser: true
      });
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div>
            {this.state.isUser ? <h1>User is Login </h1> : <h2>No user </h2>}
          </div>
          Paper can be used to build surface or other elements for your
          application.
        </div>
      </div>
    );
  }
}

export default Profile;

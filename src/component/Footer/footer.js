import React, { Component } from "react";
import AppConfig from "../../const/AppConfig";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>{AppConfig.copyText}</div>
      </div>
    );
  }
}

export default Footer;

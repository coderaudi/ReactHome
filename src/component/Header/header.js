import React, { Component } from "react";

import AppConfig from "../../const/AppConfig";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div> {AppConfig.siteName}</div>
      </div>
    );
  }
}

export default Header;

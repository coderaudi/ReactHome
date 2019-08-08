import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppConfig from "../const/AppConfig";
import Home from "../routing/Home/homepage";
import Profile from "../routing/Profile/profile";
import Header from "../component/Header/header";
import Footer from "../component/Footer/footer";

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Route path="/app/coderhome/profile" component={Profile} />
        <Route path="/app/coderhome/home" component={Home} />
        <Footer />
      </div>
    );
  }
}

export default MainApp;

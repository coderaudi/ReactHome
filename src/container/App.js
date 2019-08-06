import React, { Component } from "react";
import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Header from "../component/Header/header";
import Footer from "../component/Footer/footer";

import SignIN from "./signin";

import Home from "../routing/Home/homepage";
import Profile from "../routing/Profile/profile";

class App extends Component {
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
      <div className="App">
        <Router>
          <div>
            <Header />

            <Route path="/profile" component={Profile} />
            <Route path="/home" component={Home} />
            <Route path="/signin" component={SignIN} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

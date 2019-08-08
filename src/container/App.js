import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

import MainApp from "../routing/index";
import SignIN from "./signin";

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
          <Switch>
            <Route path="/signin" component={SignIN} />
            <Route path="/app/" component={MainApp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

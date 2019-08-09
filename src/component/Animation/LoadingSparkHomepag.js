import React, { Component } from "react";
import "./LoadingSparkHomepag.css";
class LoadingHomeAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="box--container">
            <div className="box box--1">
              <div className="circle circle--1" />
            </div>

            <div className="box box--2">
              <div className="circle circle--2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingHomeAnimation;

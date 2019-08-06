import React, { Component } from "react";
import Draggable from "react-draggable"; // The default

class DragComponenet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Draggable>
          <div
            style={{
              color: "red",
              fontSize: 40,
              background: "green"
            }}
          >
            this is inline style in reactjs{" "}
          </div>
        </Draggable>{" "}
        <Draggable>
          <div
            style={{
              color: "red",
              fontSize: 40,
              background: "green"
            }}
          >
            this is inline style in reactjs{" "}
          </div>
        </Draggable>{" "}
        <Draggable>
          <div
            style={{
              color: "red",
              fontSize: 40,
              background: "green"
            }}
          >
            this is inline style in reactjs{" "}
          </div>
        </Draggable>
      </div>
    );
  }
}
export default DragComponenet;

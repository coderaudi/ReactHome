import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
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
        <Modal
          isOpen={true}
          // contentLabel={props.contentLabel}
          //   shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick}
          //   className={modalCSS}
          //   overlayClassName={overlayCSS}
          //   onAfterOpen={props.onAfterOpen}
        >
          <div>
            <ModalHeader
              title={"hhhhhhhh"}
              //   onTickerClick={props.onClose}
              className={"testdrg"}
            />
            <ModalBody>{"fg body  "}</ModalBody>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;

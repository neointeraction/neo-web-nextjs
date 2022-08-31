import React, { Component } from "react";
import ReactWOW from "react-wow";
// import "../css/main.css";

import ModalFormContact from "components/ModalFormContact";

import CloseModal from "assets/images/Black_close_icn.svg";
// import Attach from "assets/images/attach_file_Icon.svg";

export default class GetQuoteModal extends Component {
  constructor() {
    super();
    this.state = { message: "No Attachment", files: [] };
  }

  handleInputChange = (e) => {
    const files = e.target.files;

    if (files.length) {
      this.setState({
        message: `Uploaded File: ${files.item(0).name}`,
        files: files,
      });
    }
  };

  handleSendFiles = () => {
    console.log(this.state.files[0]);

    // this.state.files
  };

  render() {
    const { togglePopover } = this.props;
    return (
      <div>
        <div className="modal-container animated fadeIn ">
          <div className="popover-relative">
            <button
              onClick={togglePopover}
              className="modal-close model-close-ux"
            >
              <img src={CloseModal} alt="close-modal" />
            </button>
          </div>
          <ReactWOW animation="fadeIn" offset={-200}>
            <ModalFormContact formtitle={this.props.formtitle} />
          </ReactWOW>
        </div>
      </div>
    );
  }
}

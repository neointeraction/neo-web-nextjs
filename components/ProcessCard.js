import React, { Component } from "react";
import ReactModal from "react-modal";
// import "../css/main.css";
import UxModal from "./UxModal";

export default class ProcessCard extends Component {
  constructor() {
    super();
    this.state = {
      isMouseInside: false,
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { className, backgroundImages, infoText, cardTitle, cardId } =
      this.props;
    return (
      <div>
        <div
          className={`process-card hover-zoom ${className}`}
          style={{ backgroundImage: `url(${backgroundImages})` }}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          <div className="pc-info-box-position">
            <div className="pc-card-title animated fadeIn">
              <h1>{cardTitle}</h1>
            </div>
            <div className="pc-info-box animated slideInUp fast">
              <p className="pc-text">{infoText}</p>
              <button
                className="custom-btn"
                id={cardId}
                onClick={this.handleOpenModal}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="career"
          onRequestClose={this.handleCloseModal}
          className="career-modal animated zoomIn"
          overlayClassName="Overlay"
        >
          {cardId === "card1" && (
            <div>
              <UxModal togglePopover={this.handleCloseModal} />
            </div>
          )}
          {cardId === "card2" && (
            <div>
              <p>hello 2</p>
              <button onClick={this.handleCloseModal}>Close Modal</button>
            </div>
          )}
        </ReactModal>
      </div>
    );
  }
}

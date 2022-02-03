import React, { Component } from "react";
import ReactModal from "react-modal";
import ReactWOW from "react-wow";
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
    const {
      className,
      backgroundImages,
      infoText,
      cardTitle,
      cardId,
      noBg,
      customClass,
    } = this.props;
    return (
      <div>
        <div
          className={`process-card hover-zoom ${className} ${
            noBg ? "overflow" : ""
          }`}
          style={noBg ? null : { backgroundImage: `url(${backgroundImages})` }}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          <div className="pc-info-box-position">
            {noBg && (
              <ReactWOW animation="fadeInDown" delay="0s" offset={0}>
                <img
                  src={backgroundImages}
                  alt={backgroundImages}
                  className={`custom-img ${customClass}`}
                />
              </ReactWOW>
            )}
            <ReactWOW animation="fadeIn" delay="0s" offset={0}>
              <div className="pc-card-title ">
                <h1>{cardTitle}</h1>
              </div>
            </ReactWOW>

            <ReactWOW animation="fadeInUp" delay="0s" offset={0}>
              <div className="pc-info-box">
                <p className="pc-text">{infoText}</p>
                <button
                  className="custom-btn"
                  id={cardId}
                  onClick={this.handleOpenModal}
                >
                  Apply Now
                </button>
              </div>
            </ReactWOW>
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

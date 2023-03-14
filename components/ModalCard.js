import React, { Component } from "react";
import ReactModal from "react-modal";
// import "../css/main.css";

import UxModal from "./UxModal";
import UiModal from "./UiModal";
import UiEngineerModal from "./UiEngineerModal";
import MarketingModal from "./MarketingModal";
import ManagerModal from "./ManagerModal";
import AnalystModal from "./AnalystModal";
import GetQuoteModal from "components/GetQuoteModal";

export default class ModalCard extends Component {
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
    const { title, text, className, cardId, textItalic, buttonText, image } =
      this.props;
    return (
      <div className={`modal-card ${className}`}>
        {image && <img src={image} alt="image" className="modal-card-img" />}

        <div>
          <h2 className="mc-title">{title}</h2>
          <h3 className="mc-text">{text}</h3>
          {textItalic && <h3 className="mc-text italic">{textItalic}</h3>}
          {/* <button
            className="custom-btn btn-text card-btn"
            id={cardId}
            onClick={this.handleOpenModal}
          >
            {buttonText}
          </button> */}

          <a
            className="custom-btn btn-text card-btn"
            href={
              title === "ux designer"
                ? "https://forms.gle/QwyuiTkGd9MjoiPj7"
                : title === "ui designer"
                ? "https://forms.gle/QwyuiTkGd9MjoiPj7"
                : title === "ui engineer"
                ? "https://forms.gle/eFqkRfQpJ8PzGnMo8"
                : title === "digital marketing"
                ? "https://forms.gle/GeGXwatjxHqeK9oe6"
                : title === "project manager"
                ? "https://forms.gle/qSMkP3PAtiS5nCzY6"
                : title === "business analyst"
                ? "https://forms.gle/Gbz6SKgWQgqKxmFT9"
                : null
            }
            target="_blank"
          >
            {buttonText}
          </a>
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="career"
          onRequestClose={this.handleCloseModal}
          className="career-modal animated zoomIn"
          overlayClassName="Overlay"
        >
          {cardId === "ux" && (
            <div>
              <UxModal togglePopover={this.handleCloseModal} />
            </div>
          )}
          {cardId === "ui" && (
            <div>
              <UiModal togglePopover={this.handleCloseModal} />
            </div>
          )}
          {cardId === "uiEngineer" && (
            <div>
              <UiEngineerModal togglePopover={this.handleCloseModal} />
            </div>
          )}
          {cardId === "marketing" && (
            <div>
              <MarketingModal togglePopover={this.handleCloseModal} />
            </div>
          )}
          {cardId === "manager" && (
            <div>
              <ManagerModal togglePopover={this.handleCloseModal} />
            </div>
          )}
          {cardId === "analyst" && (
            <div>
              <AnalystModal togglePopover={this.handleCloseModal} />
            </div>
          )}
          {cardId === "quote" && (
            <div>
              <GetQuoteModal
                togglePopover={this.handleCloseModal}
                formtitle={`Hire ${title}`}
              />
            </div>
          )}
        </ReactModal>
      </div>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";

import "../../styles/quiz/Modal.css";

type Props = {
  element: Element;
  closeModal: () => {
    type: string;
  };
};

const PauseModal = ({ element, closeModal }: Props) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="overlay" onClick={() => closeModal()} />
      <div className="modal">
        <button onClick={() => closeModal()}>close</button>
        PauseModal
      </div>
    </React.Fragment>,
    element
  );
};

export default PauseModal;

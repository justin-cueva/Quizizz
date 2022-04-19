import React from "react";
import ReactDOM from "react-dom";

import "../../styles/quiz/Modal.css";

type Props = {
  element: Element;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PauseModal = ({ element, setIsOpen }: Props) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="overlay" onClick={() => setIsOpen(false)} />
      <div className="modal">
        <button onClick={() => setIsOpen(false)}>close</button>
        PauseModal
      </div>
    </React.Fragment>,
    element
  );
};

export default PauseModal;

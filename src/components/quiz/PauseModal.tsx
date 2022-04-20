import React from "react";
import ReactDOM from "react-dom";
import { FaRunning } from "react-icons/fa";
import "../../styles/quiz/Modal.css";

type Props = {
  element: Element;
  setQuizIsPaused: (payload: boolean) => { type: string; payload: boolean };
};

const PauseModal = ({ element, setQuizIsPaused }: Props) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="overlay" onClick={() => setQuizIsPaused(false)} />
      <div className="modal">
        <div className="container--relative modal__container--flex">
          <div className="modal__progress-bar">
            <div className="modal__progress--wrong">
              <div className="modal__progress--correct" />
            </div>
            <span className="modal__icon--running">
              <FaRunning />
            </span>
          </div>
          <div className="modal__remaining-questions">
            2 Questions Remaining
          </div>
          <button
            type="button"
            onClick={() => setQuizIsPaused(false)}
            className="modal__resume-button"
          >
            Resume
          </button>
        </div>
      </div>
    </React.Fragment>,
    element
  );
};

export default PauseModal;

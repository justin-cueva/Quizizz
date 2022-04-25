import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import ReactDOM from "react-dom";
import { FaRunning, FaFlagCheckered } from "react-icons/fa";

import { Question } from "../../types";
import { resetUrl } from "../../actions";
import { resetScoreAndStreak } from "../../actions/quizStatsActions";
import "../../styles/quiz/Modal.css";

const PauseModal = ({
  element,
  score,
  questionNumber,
  numberOfQuestions,
  setQuizIsPaused,
  resetUrl,
  resetScoreAndStreak,
}: Props) => {
  const navigate = useNavigate();
  const questionsLeft = numberOfQuestions - (questionNumber - 1);
  const percentDone = `${100 - (questionsLeft / numberOfQuestions) * 100}%`;
  const currentScore = `${(score / (questionNumber - 1)) * 100}%`;

  useEffect(() => {
    console.log(percentDone);
    console.log(currentScore);
  }, [percentDone, currentScore]);

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="overlay" onClick={() => setQuizIsPaused(false)} />
      <div className="modal">
        <div className="container--relative modal__container--flex">
          <div className="modal__progress-bar">
            <div
              style={{ width: percentDone }}
              className="modal__progress--wrong"
            >
              <div
                style={{ width: currentScore }}
                className="modal__progress--correct"
              />
            </div>
            <span
              style={{ left: percentDone }}
              className="modal__icon--running"
            >
              <FaRunning />
            </span>
            <span className="modal__icon--finish">
              <FaFlagCheckered />
            </span>
          </div>
          <div className="modal__remaining-questions">
            {questionsLeft} Questions Remaining
          </div>
          <button
            type="button"
            onClick={() => setQuizIsPaused(false)}
            className="modal__resume-button modal__button btn--resume"
          >
            Resume
          </button>
          <button
            type="button"
            onClick={() => {
              setQuizIsPaused(false);
              resetUrl();
              navigate("/");
              resetScoreAndStreak();
            }}
            className="modal__resume-button modal__button btn--quit"
          >
            Quit
          </button>
        </div>
      </div>
    </React.Fragment>,
    element
  );
};

type RootState = {
  quizQuestions: Question[];
  quizStats: { score: number; streak: number };
};

const mapStateToProps = (state: RootState) => {
  return {
    numberOfQuestions: state.quizQuestions.length,
    score: state.quizStats.score,
  };
};

const connector = connect(mapStateToProps, { resetUrl, resetScoreAndStreak });

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  questionNumber: number;
  element: Element;
  setQuizIsPaused: (payload: boolean) => { type: string; payload: boolean };
};

export default connector(PauseModal);

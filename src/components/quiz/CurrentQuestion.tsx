import { useState, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Oval } from "react-loader-spinner";

import "../../styles/quiz/CurrentQuestion.css";
import { Question } from "../../types";

const CurrentQuestion = ({
  quizQuestions,
  questionNumber,
  setQuestionNumber,
}: Props) => {
  const loadingSpinner = (
    <div className="spinner">
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="#000"
        secondaryColor="white"
      />
    </div>
  );

  return (
    <div className="current-question container--content">
      {quizQuestions.length !== 0 ? (
        <Fragment>
          <div className="question">
            <span
              onClick={() => console.log(quizQuestions[questionNumber - 1])}
            >
              {quizQuestions[questionNumber - 1].question}
            </span>
          </div>
          <div className="choices">
            {quizQuestions[questionNumber - 1]?.options?.map(
              (option, index) => {
                return (
                  <div
                    key={index + 1}
                    className={`choice choice--${index + 1}`}
                    onClick={() => setQuestionNumber((prev) => prev + 1)}
                  >
                    {option}
                  </div>
                );
              }
            )}
          </div>
        </Fragment>
      ) : (
        loadingSpinner
      )}
    </div>
  );
};

// quizQuestions[questionNumber - 1].incorrect_answer

interface RootState {
  quizQuestions: Question[];
}

const mapStateToProps = (state: RootState) => ({
  quizQuestions: state.quizQuestions,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default connector(CurrentQuestion);

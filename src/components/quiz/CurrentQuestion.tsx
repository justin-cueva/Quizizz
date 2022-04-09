import { useEffect, useState, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

import "../../styles/quiz/CurrentQuestion.css";
import { Question } from "../../types";
import { addToScore } from "../../actions";

const CurrentQuestion = ({
  quizQuestions,
  questionNumber,
  setQuestionNumber,
  addToScore,
  isLoading,
}: Props) => {
  const navigate = useNavigate();

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

  const numberOfQuestions = quizQuestions.length;

  const currentQuestion = quizQuestions[questionNumber - 1];

  useEffect(
    () => console.log(quizQuestions[questionNumber - 1]?.correct_answer),
    [questionNumber, quizQuestions]
  );

  return (
    <div className="current-question container--content">
      {!isLoading ? (
        <Fragment>
          <div className="question">
            <span>{currentQuestion.question}</span>
          </div>
          <div className="choices">
            {currentQuestion?.options?.map((option, index) => {
              return (
                <div
                  key={index + 1}
                  className={`choice choice--${index + 1}`}
                  onClick={() => {
                    if (currentQuestion.correct_answer === option) {
                      addToScore();
                    }
                    if (numberOfQuestions === questionNumber) {
                      setQuestionNumber(1);
                      navigate("/summary");
                    } else {
                      setQuestionNumber((prev) => prev + 1);
                    }
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </Fragment>
      ) : (
        loadingSpinner
      )}
    </div>
  );
};

interface RootState {
  quizQuestions: Question[];
}

const mapStateToProps = (state: RootState) => ({
  quizQuestions: state.quizQuestions,
});

const connector = connect(mapStateToProps, { addToScore });
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  isLoading: boolean;
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default connector(CurrentQuestion);

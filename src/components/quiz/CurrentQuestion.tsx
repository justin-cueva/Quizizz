import { useEffect, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Oval } from "react-loader-spinner";

import "../../styles/quiz/CurrentQuestion.css";
import { Question } from "../../types";
import Options from "./Options";

const CurrentQuestion = ({
  quizQuestions,
  questionNumber,
  setQuestionNumber,
  isLoading,
  isShowingResults,
}: Props) => {
  useEffect(() => {
    // console.log(`questions are loaded: ${quesL}`);
    console.log(`questions are showing: ${isShowingResults}`);
  }, [isShowingResults]);

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
          <Options
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </Fragment>
      ) : (
        loadingSpinner
      )}
    </div>
  );
};

interface RootState {
  quizQuestions: Question[];
  quizTimer: {
    questionsAreLoaded: boolean;
    quizIsPaused: boolean;
    isShowingResults: boolean;
  };
}

const mapStateToProps = (state: RootState) => ({
  quizQuestions: state.quizQuestions,
  isShowingResults: state.quizTimer.isShowingResults,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  isLoading: boolean;
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default connector(CurrentQuestion);

import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Question } from "../../types";
import { addToScore } from "../../actions/index";
import { addToStreak } from "../../actions/streakActions";
import { resetStreak } from "../../actions/streakActions";
import { setIsShowing, hideResults } from "../../actions/showingResultsActions";
import "../../styles/quiz/CurrentQuestion.css";
import "../../styles/quiz/Options.css";

const Options = ({
  quizQuestions,
  questionNumber,
  setQuestionNumber,
  addToScore,
  addToStreak,
  resetStreak,
  setIsShowing,
  hideResults,
  isShowingResults,
}: Props) => {
  // const [isShowingAnswer, setIsShowingAnswer] = useState<boolean>(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean>(false);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const navigate = useNavigate();
  const numberOfQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[questionNumber - 1];

  const clickHandler = (option: any) => {
    setIsShowing();
    // ****************************
    if (currentQuestion.correct_answer === option) {
      setAnsweredCorrectly(true);
      addToStreak();
    }
    if (currentQuestion.correct_answer !== option) {
      // reset the streak
      resetStreak();
    }
    setTimeout(() => {
      // when we get the question correct
      if (currentQuestion.correct_answer === option) {
        addToScore();
      }
      // when we finished the quiz
      if (numberOfQuestions === questionNumber) {
        setQuestionNumber(1);
        navigate("/summary");
        // going to next question
      } else {
        setQuestionNumber((prev) => prev + 1);
      }
      hideResults();
      setAnsweredCorrectly(false);
      setWrongAnswer(0);
    }, 1250);
  };

  const showingAnswerColor = (option: string, correctAnswer: string) => {
    if (option === correctAnswer) {
      return "option--correct";
    }
    if (option !== correctAnswer) return "option--none";
  };

  return (
    <div className="choices">
      {currentQuestion?.options?.map((option, index) => {
        return (
          <div
            key={index + 1}
            className={`choice choice--${index + 1} ${
              isShowingResults &&
              !answeredCorrectly &&
              wrongAnswer === index + 1
                ? "option--wrong"
                : `${
                    isShowingResults
                      ? showingAnswerColor(
                          option,
                          currentQuestion.correct_answer
                        )
                      : ""
                  }`
            } `}
            // if showing answer and answered wrong
            onClick={() => {
              if (option !== currentQuestion.correct_answer)
                setWrongAnswer(index + 1);
              if (isShowingResults) {
              } else {
                clickHandler(option);
              }
            }}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
};

interface RootState {
  quizQuestions: Question[];
  isShowingResults: boolean;
}

const mapStateToProps = (state: RootState) => ({
  quizQuestions: state.quizQuestions,
  isShowingResults: state.isShowingResults,
});

const connector = connect(mapStateToProps, {
  addToScore,
  addToStreak,
  resetStreak,
  setIsShowing,
  hideResults,
});
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default connector(Options);

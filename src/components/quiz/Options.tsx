import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Question } from "../../types";
import { addToScore } from "../../actions/index";
import "../../styles/quiz/CurrentQuestion.css";

const Options = ({
  quizQuestions,
  questionNumber,
  setQuestionNumber,
  addToScore,
}: Props) => {
  const [isShowingAnswer, setIsShowingAnswer] = useState<boolean>(false);
  const navigate = useNavigate();
  const numberOfQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[questionNumber - 1];

  const clickHandler = (option: any) => {
    console.log("STARTED timer");
    setIsShowingAnswer(true);
    setTimeout(() => {
      console.log("ENDED timer");
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
      setIsShowingAnswer(false);
    }, 5000);
  };

  return (
    <div className="choices">
      {currentQuestion?.options?.map((option, index) => {
        return (
          <div
            key={index + 1}
            className={`choice choice--${index + 1}`}
            onClick={() => {
              isShowingAnswer ? console.log("nothing") : clickHandler(option);
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
}

const mapStateToProps = (state: RootState) => ({
  quizQuestions: state.quizQuestions,
});

const connector = connect(mapStateToProps, { addToScore });
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default connector(Options);

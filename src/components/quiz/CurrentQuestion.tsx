import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import "../../styles/quiz/CurrentQuestion.css";
import { Question } from "../../types";

const CurrentQuestion = ({ quizQuestions }: PropsFromRedux) => {
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <div className="current-question">
      <div className="question">
        <span onClick={() => console.log(quizQuestions[questionNumber - 1])}>
          How much wood would it take for a would chuck to chuck wood?
        </span>
      </div>
      {quizQuestions.length !== 0 && (
        <div className="choices">
          {quizQuestions[questionNumber - 1]?.options?.map((option, index) => {
            return (
              <div key={index + 1} className={`choice choice--${index + 1}`}>
                {option}
              </div>
            );
          })}
        </div>
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

export default connector(CurrentQuestion);

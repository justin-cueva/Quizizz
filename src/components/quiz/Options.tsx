// PROPS NEEDED
// currentQuestion
// addToScore
// setQuestionNumber
// numberOfQuestions
// questionNumber
// useNavigate from react router
import "../../styles/quiz/CurrentQuestion.css";

// PROPS NEEDED IN CURRENT QUESTION. TSX
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Question } from "../../types";
import { addToScore } from "../../actions/index";

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

const Options = ({
  quizQuestions,
  questionNumber,
  setQuestionNumber,
  addToScore,
}: Props) => {
  const navigate = useNavigate();
  const numberOfQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[questionNumber - 1];

  return (
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
  );
};

export default connector(Options);

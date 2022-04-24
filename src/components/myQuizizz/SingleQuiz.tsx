import { Question } from "../../types";
import "../../styles/myQuizizz/singleQuiz.css";

type Props = {
  quiz: {
    name: string;
    questions: Question[];
  };
};

const SingleQuiz = ({ quiz }: Props) => {
  return (
    <div className="single-quiz">
      <div>
        <span>{quiz.name}</span>
      </div>
      <div className="single-quiz__actions">
        <button className="btn--take-quiz" type="button">
          take quiz
        </button>
        <button className="btn--delete" type="button">
          delete quiz
        </button>
      </div>
    </div>
  );
};

export default SingleQuiz;

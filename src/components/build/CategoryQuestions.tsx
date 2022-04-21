import { BsPlusLg } from "react-icons/bs";
import { FcMinus } from "react-icons/fc";
import { TiMinus } from "react-icons/ti";

import { Question } from "../../types";

type Props = {
  questions: Question[] | undefined;
};

const CategoryQuestions = ({ questions }: Props) => {
  return (
    <div className="container--selected-category-questions">
      {questions &&
        questions.slice(0, 5).map((question: Question) => {
          return (
            <div
              className="container--selected-category-question"
              key={question.question}
            >
              <div className="scq__left">
                <div className="selected-category-question__actual-question">
                  {question.question}
                </div>
                <div className="selected-category-questions__options">
                  {question.incorrect_answers?.map((option, index) => {
                    return (
                      <div
                        key={index}
                        className="selected-category-questions__option wrong--scq"
                      >
                        {option}
                      </div>
                    );
                  })}
                  <div className="selected-category-questions__option correct--scq">
                    {question.correct_answer}
                  </div>
                </div>
              </div>
              <span className="scq__selectbox">
                <BsPlusLg />
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default CategoryQuestions;

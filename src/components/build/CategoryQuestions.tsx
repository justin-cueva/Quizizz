import { BsPlusLg } from "react-icons/bs";
// import { FcMinus } from "react-icons/fc";
import { TiMinus } from "react-icons/ti";

import { Question } from "../../types";

type Props = {
  questions: Question[] | undefined;
  addQuestion: (question: Question) => void;
  removeQuestion: (question: Question) => void;
};

const CategoryQuestions = ({
  questions,
  addQuestion,
  removeQuestion,
}: Props) => {
  return (
    <div className="container--selected-category-questions">
      {questions &&
        questions.map((question: Question) => {
          return (
            <div
              className={`container--selected-category-question ${
                question.isAdded ? "color--2" : "color--4"
              }`}
              key={question.question}
            >
              <div className="scq__left">
                <div className="selected-category-question__actual-question">
                  {question.question}
                </div>
                <div className="selected-category-questions__options">
                  {question.options?.map((option, index) => {
                    return (
                      <div
                        key={index}
                        className={`selected-category-questions__option ${
                          option === question.correct_answer
                            ? "correct--scq"
                            : "wrong--scq"
                        } `}
                      >
                        {option}
                      </div>
                    );
                  })}
                </div>
              </div>
              <span
                className="scq__selectbox"
                onClick={() => {
                  if (question.isAdded) {
                    removeQuestion(question);
                  } else {
                    addQuestion(question);
                  }
                }}
              >
                {question.isAdded ? <TiMinus /> : <BsPlusLg />}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default CategoryQuestions;

import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FcMinus } from "react-icons/fc";
import { TiMinus } from "react-icons/ti";

import "../../styles/build/build.css";
import useCategories from "../../hooks/useCategories";
import { Question } from "../../types";

const BuildBody = () => {
  type Category = { id: number; name: string };
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [questions, setQuestions] = useState<Question[]>();
  const { categories, error } = useCategories();

  const fetchCategoryQuestions = async () => {
    try {
      console.log("fetch");
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=25&difficulty=easy&type=multiple"
      );
      const data = await response.json();
      console.log(data);
      setQuestions(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategoryQuestions();
  }, [selectedCategory]);

  return (
    <div className="container--build-body">
      <div>
        <div className="build__tags">
          {categories.length > 0 &&
            categories.map((category: Category, i) => {
              let name;
              if (category.name.indexOf(":") > -1)
                name = category.name.split(":")[1];
              else name = category.name;

              return (
                <div
                  onClick={() => setSelectedCategory(category)}
                  className={`build__tag color--${(i % 4) + 1}`}
                  key={category.id}
                >
                  {name}
                </div>
              );
            })}
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="scq-form">
        <input placeholder="name of quiz" />
        <button>Save Quiz</button>
      </form>
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
    </div>
  );
};

export default BuildBody;

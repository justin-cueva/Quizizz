import { combineReducers } from "redux";
import { Question } from "../types";

type Actions =
  | { type: "GET_QUESTIONS"; payload: Question[] }
  | { type: "remove" };

const quizQuestionsReducer = (state = [], action: Actions) => {
  switch (action.type) {
    case "GET_QUESTIONS":
      const shuffle = (array: any) => {
        let currentIndex = array.length,
          randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }
        return array;
      };
      const newArray = [...action.payload];

      action.payload.forEach((question, index) => {
        const newQuestionOptions = shuffle([
          ...question.incorrect_answers,
          question.correct_answer,
        ]);

        newArray[index].options = newQuestionOptions;
      });

      return [...newArray];
    default:
      return state;
  }
};

export default combineReducers({ quizQuestions: quizQuestionsReducer });

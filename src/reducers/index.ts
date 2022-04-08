import { combineReducers } from "redux";
import { Question } from "../types";

type Actions =
  | { type: "GET_QUESTIONS"; payload: Question[] }
  | { type: "remove" };

const quizQuestionsReducer = (state = [], action: Actions) => {
  switch (action.type) {
    case "GET_QUESTIONS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ quizQuestions: quizQuestionsReducer });

import { Question } from "../types";

type Actions =
  | { type: "ADD_QUESTION_TO_MY_QUIZ"; payload: Question }
  | { type: "REMOVE_QUESTION_FROM_MY_QUIZ"; payload: Question };

export default (state = [], action: Actions) => {
  switch (action.type) {
    case "ADD_QUESTION_TO_MY_QUIZ":
      return [...state, action.payload];

    case "REMOVE_QUESTION_FROM_MY_QUIZ":
      const newState = state.filter((question: Question) => {
        if (question.question !== action.payload.question) {
          return question;
        }
      });
      return [...newState];

    default:
      return state;
  }
};

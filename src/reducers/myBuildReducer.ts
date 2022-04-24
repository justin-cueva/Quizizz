import { Question } from "../types";

type DefaultStateType = {
  name: string;
  questions: Question[];
};

const defaultState = {
  name: "",
  questions: [],
};

type Actions =
  | { type: "ADD_QUESTION_TO_MY_BUILD"; payload: Question }
  | { type: "REMOVE_QUESTION_FROM_MY_BUILD"; payload: Question }
  | { type: "NAME_MY_BUILD"; payload: string }
  | { type: "SAVED_BUILD" };

export default (state: DefaultStateType = defaultState, action: Actions) => {
  switch (action.type) {
    case "ADD_QUESTION_TO_MY_BUILD":
      return { ...state, questions: [...state.questions, action.payload] };

    case "REMOVE_QUESTION_FROM_MY_BUILD":
      const newArray = state.questions.filter((question) => {
        if (question.question !== action.payload.question) {
          return question;
        }
      });
      return { ...state, questions: newArray };

    case "NAME_MY_BUILD":
      return { ...state, name: action.payload };

    case "SAVED_BUILD":
      return { name: "", questions: [] };

    default:
      return state;
  }
};

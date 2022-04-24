import { Question } from "../types";

const defaultState = {
  isLoggedIn: false,
  userId: "",
  usersQuizizz: [],
};

type Quiz = {
  id: string;
  name: string;
  questions: Question[];
};

type Actions =
  | { type: "SIGN_IN"; payload: string }
  | { type: "LOGOUT" }
  | { type: "GOT_USERS_QUIZIZZ"; payload: {} }
  | { type: "DELETED_A_QUIZ"; payload: string };

export default (state = defaultState, action: Actions) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isLoggedIn: true, userId: action.payload };
    case "LOGOUT":
      return { ...defaultState };
    case "GOT_USERS_QUIZIZZ":
      return {
        ...state,
        usersQuizizz: action.payload ? Object.values(action.payload) : [],
      };
    case "DELETED_A_QUIZ":
      return {
        ...state,
        usersQuizizz: state.usersQuizizz.filter((quiz: Quiz) => {
          if (quiz.id !== action.payload) {
            return quiz;
          }
        }),
      };
    default:
      return state;
  }
};

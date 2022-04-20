const defaultState = {
  score: 0,
  streak: 0,
};

type Actions =
  | { type: "ADD_TO_SCORE_n" }
  | { type: "RESET_SCORE_n" }
  | { type: "RESET_STREAK_n" }
  | { type: "ADD_TO_STREAK_n" };

export default (state = defaultState, action: Actions) => {
  switch (action.type) {
    case "ADD_TO_SCORE_n":
      return { ...state, score: state.score + 1 };
    case "RESET_SCORE_n":
      return { ...state, score: 0 };
    case "ADD_TO_STREAK_n":
      return { ...state, streak: state.streak + 1 };
    case "RESET_STREAK_n":
      return { ...state, streak: 0 };
    default:
      return state;
  }
};

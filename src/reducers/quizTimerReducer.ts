const defaultState = {
  questionsAreLoaded: false,
  quizIsPaused: false,
  isShowingResults: false,
};

type Actions =
  | { type: "QUIZ_IS_PAUSED"; payload: boolean }
  | { type: "IS_SHOWING_RESULTS"; payload: boolean }
  | { type: "QUESTIONS_ARE_LOADED"; payload: boolean };

export default (state = defaultState, action: Actions) => {
  switch (action.type) {
    case "QUIZ_IS_PAUSED":
      return { ...state, quizIsPaused: action.payload };
    case "IS_SHOWING_RESULTS":
      return { ...state, isShowingResults: action.payload };
    case "QUESTIONS_ARE_LOADED":
      return { ...state, questionsAreLoaded: action.payload };
    default:
      return state;
  }
};

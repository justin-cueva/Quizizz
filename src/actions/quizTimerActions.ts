export const quizIsPaused = (payload: boolean) => {
  return { type: "QUIZ_IS_PAUSED", payload: payload };
};

export const questionsAreLoaded = (payload: boolean) => {
  return { type: "QUESTIONS_ARE_LOADED", payload };
};

export const isShowingResults = (payload: boolean) => {
  return { type: "IS_SHOWING_RESULTS", payload };
};

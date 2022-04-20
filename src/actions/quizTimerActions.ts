// setQuizIsPaused
export const quizIsPaused = (payload: boolean) => {
  return { type: "QUIZ_IS_PAUSED", payload: payload };
};

// setQuestionsAreLoaded
export const questionsAreLoaded = (payload: boolean) => {
  return { type: "QUESTIONS_ARE_LOADED", payload };
};

export const setIsShowingResults = (payload: boolean) => {
  return { type: "IS_SHOWING_RESULTS", payload };
};

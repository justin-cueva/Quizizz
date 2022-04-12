export const getQuestions = (path: string) => async (dispatch: any) => {
  const response = await fetch(`https://opentdb.com/api.php?${path}`);
  const { results } = await response.json();
  dispatch({ type: "GET_QUESTIONS", payload: results });
  dispatch({ type: "GOT_QUESTIONS" });
};

export const setWaitingForQuiz = () => {
  return { type: "SET_WAITING_FOR_QUIZ" };
};

export const resetScore = () => {
  return { type: "RESET_SCORE" };
};

export const addToScore = () => {
  return { type: "ADD_TO_SCORE" };
};

export const setUrl = (url: string) => {
  return { type: "SET_URL", payload: url };
};

export const resetUrl = () => {
  return { type: "RESET_URL" };
};

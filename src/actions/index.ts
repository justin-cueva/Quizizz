export const getQuestions = (path: string) => async (dispatch: any) => {
  const response = await fetch(`https://opentdb.com/api.php?${path}`);
  const { results } = await response.json();
  dispatch({ type: "GET_QUESTIONS", payload: results });
  dispatch({ type: "QUESTIONS_ARE_LOADED", payload: true });
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

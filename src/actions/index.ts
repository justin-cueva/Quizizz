export const getQuestions = (path: string) => async (dispatch: any) => {
  const response = await fetch(`https://opentdb.com/api.php?${path}`);
  const { results } = await response.json();
  dispatch({ type: "GET_QUESTIONS", payload: results });
};

export const resetScore = () => {
  return { type: "RESET_SCORE" };
};

export const addToScore = () => {
  return { type: "ADD_TO_SCORE" };
};

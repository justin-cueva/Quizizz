export const getQuestions = (categoryId: number) => async (dispatch: any) => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=easy&type=multiple`
  );
  const { results } = await response.json();
  dispatch({ type: "GET_QUESTIONS", payload: results });
};

export const resetScore = () => {
  return { type: "RESET_SCORE" };
};

export const addToScore = () => {
  return { type: "ADD_TO_SCORE" };
};

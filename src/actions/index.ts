export const getQuestions = (categoryId: number) => async (dispatch: any) => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=easy`
  );

  const { results } = await response.json();
  console.log(results);
  dispatch({ type: "GET_QUESTIONS", payload: results });
};

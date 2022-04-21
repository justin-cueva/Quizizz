export const getCategories = () => async (dispatch: any, getState: any) => {
  const catsExist = getState().build.categories.length > 0;
  if (catsExist) return;
  const response = await fetch("https://opentdb.com/api_category.php");
  const data = await response.json();
  console.log("it ran");
  dispatch({ type: "GOT_CATEGORIES", payload: data.trivia_categories });
};

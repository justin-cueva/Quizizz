import { Category } from "../types";

export const getCategories = () => async (dispatch: any, getState: any) => {
  const catsExist = getState().build.categories.length > 0;
  if (catsExist) return;
  const response = await fetch("https://opentdb.com/api_category.php");
  const data = await response.json();
  dispatch({ type: "GOT_CATEGORIES", payload: data.trivia_categories });
};

export const getACategoriesQuestions =
  (category: Category | undefined) => async (dispatch: any, getState: any) => {
    if (!category) return;

    const catWasAlreadyFetched =
      getState().build.categoryQuestions[category.id]?.length > 0;

    if (catWasAlreadyFetched) return;

    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category.id}&type=multiple`
    );

    const data = await response.json();

    dispatch({
      type: "GOT_A_CATEGORIES_QUESTIONS",
      payload: { category, questions: data.results },
    });
  };

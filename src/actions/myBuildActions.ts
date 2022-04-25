import { Question, Category } from "../types";

export const addQuestion =
  (question: Question) => (dispatch: any, getState: any) => {
    const category = getState().build.categories.find((category: Category) => {
      if (category.name === question.category) return category.id;
    });

    dispatch({
      type: "ADD_QUESTION_TO_MY_BUILD",
      payload: question,
    });
    dispatch({
      type: "CHANGE_ADDED_STATUS_TO_TRUE",
      payload: { question, categoryId: category.id },
    });
  };

export const removeQuestion =
  (question: Question) => (dispatch: any, getState: any) => {
    const category = getState().build.categories.find((category: Category) => {
      if (category.name === question.category) return category.id;
    });
    dispatch({
      type: "REMOVE_QUESTION_FROM_MY_BUILD",
      payload: question,
    });
    dispatch({
      type: "CHANGE_ADDED_STATUS_TO_FALSE",
      payload: { question, categoryId: category.id },
    });
  };

export const nameQuiz = (name: String) => {
  return {
    type: "NAME_MY_BUILD",
    payload: name,
  };
};

export const saveBuild = () => async (dispatch: any, getState: any) => {
  try {
    const usersId = getState().account.userId;
    const nameOfBuild = getState().myBuild.name;
    const questions = getState().myBuild.questions;
    const quizId = `${usersId}${Date.now()}`;

    await fetch(
      `https://quizizz-32675-default-rtdb.firebaseio.com/${usersId}/myBuilds/${quizId}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          questions: questions,
          name: nameOfBuild,
          id: quizId,
        }),
      }
    );

    dispatch({ type: "SAVED_BUILD" });
  } catch (err) {
    console.error(err);
  }
};

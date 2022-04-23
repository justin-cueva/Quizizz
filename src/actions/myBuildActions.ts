import { Question } from "../types";

export const addQuestion = (question: Question) => {
  return {
    type: "ADD_QUESTION_TO_MY_BUILD",
    payload: question,
  };
};

export const removeQuestion = (question: Question) => {
  return {
    type: "REMOVE_QUESTION_FROM_MY_BUILD",
    payload: question,
  };
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

    const response = await fetch(
      `https://quizizz-32675-default-rtdb.firebaseio.com/${usersId}/myBuilds/${nameOfBuild}.json`,
      {
        method: "PUT",
        body: JSON.stringify(questions),
      }
    );

    console.log(response);

    dispatch({ type: "SAVED_BUILDasdfasdf" });
  } catch (err) {
    console.error(err);
  }
};

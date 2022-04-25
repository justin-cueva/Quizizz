import { Question } from "../types";

export const getQuestions = (path: string) => async (dispatch: any) => {
  const response = await fetch(`https://opentdb.com/api.php?${path}`);
  const { results } = await response.json();
  dispatch({ type: "GET_QUESTIONS", payload: results });
  dispatch({ type: "QUESTIONS_ARE_LOADED", payload: true });
};

export const setUrl = (url: string) => {
  return { type: "SET_URL", payload: url };
};

export const resetUrl = () => {
  return { type: "RESET_URL" };
};

type Quiz = { id: string; name: string; questions: Question[] };

export const getMyQuizQuestions =
  (idOfQuiz: string) => (dispatch: any, getState: any) => {
    const quizQuestions = getState().account.usersQuizizz.find((quiz: Quiz) => {
      return quiz.id === idOfQuiz;
    }).questions;
    // get the quiz questions
    // if we already fetched the our quizizz then we get the questions from redux with getState
    // but if not then we need to then fetch that one quiz from firebase
    dispatch({ type: "GET_QUESTIONS", payload: quizQuestions });
    dispatch({ type: "QUESTIONS_ARE_LOADED", payload: true });
  };

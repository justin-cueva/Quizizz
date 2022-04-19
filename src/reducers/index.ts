import { combineReducers } from "redux";

import quizQuestionsReducer from "./quizQuestionsReducer";
import scoreReducer from "./scoreReducer";
import quizUrlReducer from "./quizUrlReducer";
import streakReducer from "./streakReducer";
import isShowingResultsReducer from "./isShowingResultsReducer";
import questionsLoadedReducer from "./questionsLoadedReducer";
import pauseQuizReducer from "./pauseQuizReducer";

export default combineReducers({
  quizQuestions: quizQuestionsReducer,
  score: scoreReducer,
  quizUrl: quizUrlReducer,
  streak: streakReducer,
  isShowingResults: isShowingResultsReducer,
  questionsAreLoaded: questionsLoadedReducer,
  quizIsPaused: pauseQuizReducer,
});

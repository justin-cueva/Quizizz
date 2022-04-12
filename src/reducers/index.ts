import { combineReducers } from "redux";

import quizQuestionsReducer from "./quizQuestionsReducer";
import scoreReducer from "./scoreReducer";
import quizUrlReducer from "./quizUrlReducer";
import streakReducer from "./streakReducer";
import isShowingResultsReducer from "./isShowingResultsReducer";

export default combineReducers({
  quizQuestions: quizQuestionsReducer,
  score: scoreReducer,
  quizUrl: quizUrlReducer,
  streak: streakReducer,
  isShowingResults: isShowingResultsReducer,
});

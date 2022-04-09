import { combineReducers } from "redux";

import quizQuestionsReducer from "./quizQuestionsReducer";
import scoreReducer from "./scoreReducer";
import quizUrlReducer from "./quizUrlReducer";

export default combineReducers({
  quizQuestions: quizQuestionsReducer,
  score: scoreReducer,
  quizUrl: quizUrlReducer,
});

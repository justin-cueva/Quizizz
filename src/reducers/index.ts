import { combineReducers } from "redux";

import quizQuestionsReducer from "./quizQuestionsReducer";
import quizUrlReducer from "./quizUrlReducer";
import quizTimerReducer from "./quizTimerReducer";
import quizStatsReducer from "./quizStatsReducer";

export default combineReducers({
  quizQuestions: quizQuestionsReducer,
  quizUrl: quizUrlReducer,
  quizTimer: quizTimerReducer,
  quizStats: quizStatsReducer,
});

import { combineReducers } from "redux";

import quizQuestionsReducer from "./quizQuestionsReducer";
import scoreReducer from "./scoreReducer";
import quizUrlReducer from "./quizUrlReducer";
import streakReducer from "./streakReducer";
import quizTimerReducer from "./quizTimerReducer";
import quizStatsReducer from "./quizStatsReducer";

export default combineReducers({
  quizQuestions: quizQuestionsReducer,
  score: scoreReducer,
  quizUrl: quizUrlReducer,
  streak: streakReducer,
  quizTimer: quizTimerReducer,
  quizStats: quizStatsReducer,
});

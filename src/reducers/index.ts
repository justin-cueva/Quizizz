import { combineReducers } from "redux";

import quizQuestionsReducer from "./quizQuestionsReducer";
import quizUrlReducer from "./quizUrlReducer";
import quizTimerReducer from "./quizTimerReducer";
import quizStatsReducer from "./quizStatsReducer";
import buildReducer from "./buildReducer";
import accountReducer from "./accountReducer";
import myBuildReducer from "./myBuildReducer";

export default combineReducers({
  account: accountReducer,
  quizQuestions: quizQuestionsReducer,
  quizUrl: quizUrlReducer,
  quizTimer: quizTimerReducer,
  quizStats: quizStatsReducer,
  build: buildReducer,
  myBuild: myBuildReducer,
});

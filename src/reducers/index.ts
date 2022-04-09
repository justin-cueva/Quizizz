import { combineReducers } from "redux";

import quizQuestionsReducer from "./quizQuestionsReducer";

export default combineReducers({ quizQuestions: quizQuestionsReducer });

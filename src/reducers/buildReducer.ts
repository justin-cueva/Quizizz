import { Category, Question } from "../types";

type DefaultStateType = {
  categories: Category[];
  categoryQuestions: {
    [key: number]: Question[];
  };
};

type Actions =
  | { type: "GOT_CATEGORIES"; payload: Category[] }
  | {
      type: "GOT_A_CATEGORIES_QUESTIONS";
      payload: { category: Category; questions: Question[] };
    }
  | {
      type: "CHANGE_ADDED_STATUS_TO_TRUE";
      payload: { question: Question; categoryId: number };
    }
  | {
      type: "CHANGE_ADDED_STATUS_TO_FALSE";
      payload: { question: Question; categoryId: number };
    };

export default (
  state: DefaultStateType = { categories: [], categoryQuestions: {} },
  action: Actions
) => {
  switch (action.type) {
    case "GOT_CATEGORIES":
      return { ...state, categories: action.payload };
    case "CHANGE_ADDED_STATUS_TO_TRUE":
      const newQuestionsArr = state.categoryQuestions[
        action.payload.categoryId
      ].map((question) => {
        if (question.question === action.payload.question.question) {
          const newQuestion = { ...question, isAdded: true };
          return newQuestion;
        } else {
          return question;
        }
      });

      return {
        ...state,
        categoryQuestions: {
          ...state.categoryQuestions,
          [action.payload.categoryId]: [...newQuestionsArr],
        },
      };
    case "CHANGE_ADDED_STATUS_TO_FALSE":
      const newQuestionsAr = state.categoryQuestions[
        action.payload.categoryId
      ].map((question) => {
        if (question.question === action.payload.question.question) {
          const newQuestion = { ...question, isAdded: false };
          return newQuestion;
        } else {
          return question;
        }
      });

      return {
        ...state,
        categoryQuestions: {
          ...state.categoryQuestions,
          [action.payload.categoryId]: [...newQuestionsAr],
        },
      };
    case "GOT_A_CATEGORIES_QUESTIONS":
      const shuffle = (array: any) => {
        let currentIndex = array.length,
          randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }
        return array;
      };
      // ********* NEW MODIFIED ARRAY OF QUESTIONS ********* //
      const newArray = [...action.payload.questions];

      action.payload.questions.forEach((question, index) => {
        const newQuestionOptions = shuffle([
          ...question.incorrect_answers,
          question.correct_answer,
        ]);

        newArray[index].options = newQuestionOptions;
        newArray[index].isAdded = false;
      });

      return {
        ...state,
        categoryQuestions: {
          ...state.categoryQuestions,
          [action.payload.category.id]: newArray,
        },
      };
    default:
      return state;
  }
};

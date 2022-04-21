import { Category, Question } from "../types";

type Actions =
  | { type: "GOT_CATEGORIES"; payload: Category[] }
  | {
      type: "GOT_A_CATEGORIES_QUESTIONS";
      payload: { category: Category; questions: Question[] };
    };

export default (
  state = { categories: [], categoryQuestions: {} },
  action: Actions
) => {
  switch (action.type) {
    case "GOT_CATEGORIES":
      return { ...state, categories: action.payload };
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
      // ********* NEW MODIFIED ARRAY OF QUESTIONS *********//
      const newArray = [...action.payload.questions];

      action.payload.questions.forEach((question, index) => {
        const newQuestionOptions = shuffle([
          ...question.incorrect_answers,
          question.correct_answer,
        ]);

        newArray[index].options = newQuestionOptions;
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

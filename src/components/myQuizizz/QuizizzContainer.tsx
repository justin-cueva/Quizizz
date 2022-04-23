import "../../styles/build/build.css";
import "../../styles/generals.css";
import "../../styles/home/header.css";
import "../../styles/myQuizizz/quizizzContainer.css";

import SingleQuiz from "./SingleQuiz";

const QuizizzContainer = () => {
  return (
    <div className="container--quizizz">
      <SingleQuiz />
      <SingleQuiz />
    </div>
  );
};

export default QuizizzContainer;

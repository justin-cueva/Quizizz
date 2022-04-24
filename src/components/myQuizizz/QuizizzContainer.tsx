import "../../styles/build/build.css";
import "../../styles/generals.css";
import "../../styles/home/header.css";
import "../../styles/myQuizizz/quizizzContainer.css";

import SingleQuiz from "./SingleQuiz";

type Props = {
  usersQuizizz: [];
};

const QuizizzContainer = (props: Props) => {
  return (
    <div className="container--quizizz">
      {props.usersQuizizz.map((quiz, index) => {
        return <SingleQuiz key={index} quiz={quiz} />;
      })}
    </div>
  );
};

export default QuizizzContainer;

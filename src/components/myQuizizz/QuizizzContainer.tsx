import "../../styles/build/build.css";
import "../../styles/generals.css";
import "../../styles/home/header.css";
import "../../styles/myQuizizz/quizizzContainer.css";

import SingleQuiz from "./SingleQuiz";
import { Question } from "../../types";

type Props = {
  usersQuizizz: [];
  deleteAUsersQuiz: (quizId: string) => Promise<void>;
};

type Quiz = {
  id: string;
  name: string;
  questions: Question[];
};

const QuizizzContainer = (props: Props) => {
  return (
    <div className="container--quizizz">
      {props.usersQuizizz.map((quiz: Quiz, index) => {
        return (
          <SingleQuiz
            key={index}
            quiz={quiz}
            deleteAUsersQuiz={props.deleteAUsersQuiz}
          />
        );
      })}
    </div>
  );
};

export default QuizizzContainer;

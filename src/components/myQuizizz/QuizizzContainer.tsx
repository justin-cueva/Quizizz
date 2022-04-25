import "../../styles/build/build.css";
import "../../styles/generals.css";
import "../../styles/home/header.css";
import "../../styles/myQuizizz/quizizzContainer.css";

import SingleQuiz from "./SingleQuiz";
import Message from "../reusables/Message";
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
      {props.usersQuizizz.length > 0 ? (
        props.usersQuizizz.map((quiz: Quiz, index) => {
          console.log("entered yes quizizz");
          return (
            <SingleQuiz
              key={index}
              quiz={quiz}
              deleteAUsersQuiz={props.deleteAUsersQuiz}
            />
          );
        })
      ) : (
        <Message text="you have'nt built any quizizz yet" />
      )}
    </div>
  );
};

export default QuizizzContainer;

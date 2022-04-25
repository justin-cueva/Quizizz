import { useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";

import CurrentQuestion from "./CurrentQuestion";
import Stats from "./Stats";
import { getQuestions, getMyQuizQuestions, setUrl } from "../../actions";

const Quiz = ({ getQuestions, setUrl, getMyQuizQuestions }: PropsFromRedux) => {
  const params = useParams();
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initQuiz = async (quiz: string) => {
    await getQuestions(quiz);
    setIsLoading(false);
    setUrl(quiz);
  };

  const initMyQuiz = (myQuizId: string) => {
    getMyQuizQuestions(myQuizId);
    setIsLoading(false);
  };

  useEffect(() => {
    if (typeof params.quiz === "string") {
      initQuiz(params.quiz);
    } else if (typeof params.myQuizId === "string") {
      initMyQuiz(params.myQuizId);
      console.log("entered block");
      // now this is where we call an action creator like initMyQuiz
    } else {
      console.log(params);
      console.log(typeof params.quiz);
      console.error("invalid path (error wrote by justin)");
    }
  }, []);

  return (
    <div
      style={{
        padding: "1rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "scroll",
      }}
    >
      <Stats
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
      <CurrentQuestion
        isLoading={isLoading}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </div>
  );
};

const connector = connect(null, { getQuestions, setUrl, getMyQuizQuestions });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Quiz);

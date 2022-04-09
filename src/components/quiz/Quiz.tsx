import { useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import CurrentQuestion from "./CurrentQuestion";
import Stats from "./Stats";
import { getQuestions } from "../../actions";
import { setUrl } from "../../actions";

const Quiz = ({ getQuestions, setUrl }: PropsFromRedux) => {
  const params = useParams();
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initQuiz = async (quiz: string) => {
    await getQuestions(quiz);
    setIsLoading(false);
    setUrl(quiz);
  };

  useEffect(() => {
    console.log(params.quiz);
    if (typeof params.quiz === "string") {
      initQuiz(params.quiz);
    } else {
      console.error("invalid path");
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
      }}
    >
      <Stats questionNumber={questionNumber} />
      <CurrentQuestion
        isLoading={isLoading}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </div>
  );
};

const connector = connect(null, { getQuestions, setUrl });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Quiz);

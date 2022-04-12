import { useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import CurrentQuestion from "./CurrentQuestion";
import Stats from "./Stats";
import { getQuestions } from "../../actions";
import { setUrl } from "../../actions";
import { resetStreak } from "../../actions/streakActions";

const Quiz = ({ getQuestions, setUrl, resetStreak }: PropsFromRedux) => {
  const params = useParams();
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initQuiz = async (quiz: string) => {
    resetStreak();
    await getQuestions(quiz);
    setIsLoading(false);
    setUrl(quiz);
  };

  useEffect(() => {
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

const connector = connect(null, { getQuestions, setUrl, resetStreak });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Quiz);

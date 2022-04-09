import { useState } from "react";

import CurrentQuestion from "./CurrentQuestion";
import Stats from "./Stats";

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(1);

  return (
    <div
      style={{
        position: "relative",
        padding: "1rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stats questionNumber={questionNumber} />
      <CurrentQuestion
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </div>
  );
};

export default Quiz;

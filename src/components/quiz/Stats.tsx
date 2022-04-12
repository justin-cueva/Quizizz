import { useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GiPauseButton, GiPlayButton } from "react-icons/gi";
import { RiFireFill } from "react-icons/ri";

import "../../styles/quiz/Stats.css";
import { Question } from "../../types";

const Stats = ({
  questionNumber,
  quizQuestions,
  streak,
  setQuestionNumber,
  isShowingResults,
}: Props) => {
  const [timeLeft, setTimeLeft] = useState(1000);
  const numberOfQuestions = quizQuestions.length;
  const isLastQuestion = quizQuestions.length === questionNumber;
  const navigate = useNavigate();

  useEffect(() => {
    if (isShowingResults) {
    } else if (timeLeft > 1) {
      setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 10);
    } else {
      if (!isLastQuestion) {
        setQuestionNumber((prev) => prev + 1);
        setTimeLeft(1000);
      } else {
        // when the time runs out on the last question
        navigate("/summary");
      }
    }
  }, [timeLeft, isShowingResults]);

  useEffect(() => {
    setTimeLeft(1000);
  }, [questionNumber]);

  return (
    <div className="stats">
      <div className="stats--top">
        <div className="timer-bar">
          <div
            className="time-left"
            style={{ width: `${timeLeft / 10}%` }}
          ></div>
        </div>
      </div>
      <div className="stats--bottom">
        <div className="icon--pause">
          <GiPauseButton />
        </div>
        <div className="question-number">
          {questionNumber}/{numberOfQuestions}
        </div>
        <div className="progressbar ">
          <div
            className="progress"
            style={{
              width: `${
                (Number(streak) / Number(quizQuestions.length)) * 100
              }%`,
            }}
          >
            <div className={`icon--streak ${streak ? "on-a-streak" : ""}`}>
              <RiFireFill />
              {streak}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface RootState {
  quizQuestions: Question[];
  streak: number;
  isShowingResults: boolean;
}

const mapState = (state: RootState) => ({
  quizQuestions: state.quizQuestions,
  streak: state.streak,
  isShowingResults: state.isShowingResults,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default connector(Stats);

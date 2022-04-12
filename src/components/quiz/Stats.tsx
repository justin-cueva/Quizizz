import { useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { GiPauseButton, GiPlayButton } from "react-icons/gi";
import { RiFireFill } from "react-icons/ri";

import "../../styles/quiz/Stats.css";
import { Question } from "../../types";

const Stats = ({ questionNumber, quizQuestions, streak }: Props) => {
  const [timeLeft, setTimeLeft] = useState(2000);
  const numberOfQuestions = quizQuestions.length;

  useEffect(() => {
    if (timeLeft > 1) {
      setTimeout(() => {
        console.log(timeLeft);
        setTimeLeft((prev) => prev - 1);
      }, 10);
    }
  }, [timeLeft]);

  return (
    <div className="stats">
      <div className="stats--top">
        <div className="timer-bar">
          <div
            className="time-left"
            style={{ width: `${timeLeft / 20}%` }}
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
}

const mapState = (state: RootState) => ({
  quizQuestions: state.quizQuestions,
  streak: state.streak,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  questionNumber: number;
};

export default connector(Stats);

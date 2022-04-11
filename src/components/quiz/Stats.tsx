import { connect, ConnectedProps } from "react-redux";
import { GiPauseButton, GiPlayButton } from "react-icons/gi";
import { RiFireFill } from "react-icons/ri";

import "../../styles/quiz/Stats.css";
import { Question } from "../../types";

const Stats = ({ questionNumber, quizQuestions, streak }: Props) => {
  const numberOfQuestions = quizQuestions.length;
  return (
    <div className="stats">
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
            width: `${(Number(streak) / Number(quizQuestions.length)) * 100}%`,
          }}
        >
          <div className={`icon--streak ${streak ? "on-a-streak" : ""}`}>
            <RiFireFill />
            {streak}
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

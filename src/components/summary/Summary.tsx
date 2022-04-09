import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../../styles/summary/Summary.css";
import "../../styles/quiz/CurrentQuestion.css";
import Header from "./Header";
import { Question } from "../../types";
import { resetScore } from "../../actions";

const Summary = ({ quizQuestions, score, resetScore }: PropsFromRedux) => {
  const navigate = useNavigate();

  const finalScore = (
    (Number(score) / Number(quizQuestions.length)) *
    100
  ).toFixed(0);

  return (
    <div
      style={{
        padding: "1rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        flex: "1",
      }}
    >
      <Header />
      <div className="container--content container--summary">
        <div className="max-width-72">
          <div className="summary__accuracy">
            <div className="label">Accuracy</div>
            <div className="accuracy-bar">
              <div className="correct">
                <div className="accuracy-tag">{finalScore}%</div>
              </div>
              <div className="wrong" />
            </div>
          </div>
          <div className="summary-btns summary__accuracy">
            <button
              className="btn--play-again"
              onClick={() => {
                resetScore();
                navigate("/quiz");
              }}
            >
              Play again
            </button>
            <button
              className="btn--new-quiz"
              onClick={() => {
                resetScore();
                navigate("/");
              }}
            >
              Find a new quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface RootState {
  quizQuestions: Question[];
  score: number;
}

const mapStateToProps = (state: RootState) => ({
  quizQuestions: state.quizQuestions,
  score: state.score,
});

const connector = connect(mapStateToProps, { resetScore });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Summary);

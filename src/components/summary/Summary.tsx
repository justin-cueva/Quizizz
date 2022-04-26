import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../../styles/summary/Summary.css";
import "../../styles/quiz/CurrentQuestion.css";
// import Header from "./Header";
import Header from "../reusables/Header";
import { Question } from "../../types";
import { resetScoreAndStreak } from "../../actions/quizStatsActions";
import { resetUrl } from "../../actions";

const Summary = ({
  quizQuestions,
  score,
  quizUrl,
  resetUrl,
  resetScoreAndStreak,
}: PropsFromRedux) => {
  const navigate = useNavigate();

  useEffect(() => {
    return () => resetScoreAndStreak();
  }, []);

  const finalScore = (
    (Number(score) / Number(quizQuestions.length)) *
    100
  ).toFixed(0);

  const links = [
    { to: "/", name: "Home" },
    { to: "/build", name: "Build" },
  ];

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
      <Header page="Summary" links={links} />
      <div className="container--content container--summary">
        <div className="max-width-72">
          <div className="summary__accuracy">
            <div className="label">Accuracy</div>
            <div
              className="accuracy-bar"
              style={{ gridTemplateColumns: `${finalScore}% 1fr` }}
            >
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
                // navigate(`/quiz/${quizUrl}`);
                console.log(quizUrl);
                navigate(quizUrl);
              }}
            >
              Play again
            </button>
            <button
              className="btn--new-quiz"
              onClick={() => {
                resetUrl();
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
  quizUrl: string;
  quizStats: {
    score: number;
    streak: number;
  };
}

const mapStateToProps = (state: RootState) => ({
  quizQuestions: state.quizQuestions,
  score: state.quizStats.score,
  quizUrl: state.quizUrl,
});

const connector = connect(mapStateToProps, {
  resetUrl,
  resetScoreAndStreak,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Summary);

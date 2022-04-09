import "../../styles/summary/Summary.css";
import "../../styles/quiz/CurrentQuestion.css";
import Header from "./Header";

const Summary = () => {
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
                <div className="accuracy-tag">75%</div>
              </div>
              <div className="wrong" />
            </div>
          </div>
          <div className="summary-btns summary__accuracy">
            <button className="btn--play-again">Play again</button>
            <button className="btn--new-quiz">Find a new quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

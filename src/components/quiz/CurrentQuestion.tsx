import "../../styles/quiz/CurrentQuestion.css";

const CurrentQuestion = () => {
  return (
    <div className="current-question">
      <div className="question">
        <span>Durring the summer, the ___ wool has to be sheared. (sheep)</span>
      </div>
      <div className="choices">
        <div className="choice choice--1">sheeps's</div>
        <div className="choice choice--2">sheep's</div>
        <div className="choice choice--3">sheeps'</div>
        <div className="choice choice--4">sheeps</div>
      </div>
    </div>
  );
};

export default CurrentQuestion;

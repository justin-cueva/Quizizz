import "../../styles/myQuizizz/singleQuiz.css";

const SingleQuiz = () => {
  return (
    <div className="single-quiz">
      <div>
        <span>Best Quiz Ever</span>
      </div>
      <div className="single-quiz__actions">
        <button className="btn--take-quiz" type="button">
          take quiz
        </button>
        <button className="btn--delete" type="button">
          delete quiz
        </button>
      </div>
    </div>
  );
};

export default SingleQuiz;

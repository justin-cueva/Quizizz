import "../../styles/quiz/CurrentQuestion.css";
import "../../styles/quiz/Stats.css";

const Categories = () => {
  return (
    <div className="current-question ">
      <div className="choices">
        <div className="choice choice--2">Celebrities</div>
        <div className="choice choice--3">Art</div>
        <div className="choice choice--1">Animals</div>
        <div className="choice choice--4">Mythology</div>
      </div>
      <div className="choices">
        <div className="choice choice--1">Sports</div>
        <div className="choice choice--2">Geography</div>
        <div className="choice choice--3">Histoy</div>
        <div className="choice choice--4">Vehicles</div>
      </div>
    </div>
  );
};

export default Categories;

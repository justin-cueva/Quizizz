import { GiPauseButton, GiPlayButton } from "react-icons/gi";
import { RiFireFill } from "react-icons/ri";

import "../../styles/Quiz.css";

const Stats = () => {
  return (
    <div className="stats">
      <div className="icon--pause">
        <GiPauseButton />
      </div>
      <div className="question-number">12/20</div>
      <div className="progressbar ">
        <div className="progress progress--2">
          <div className="icon--streak">
            <RiFireFill />5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

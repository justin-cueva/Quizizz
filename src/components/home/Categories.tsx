import { connect, ConnectedProps } from "react-redux";

import "../../styles/quiz/CurrentQuestion.css";
import "../../styles/home/Categories.css";
import { getQuestions } from "../../actions";

const categories = [
  { name: "Celebrities", id: 26 },
  { name: "Art", id: 25 },
  { name: "Animals", id: 27 },
  { name: "Mythology", id: 20 },
  { name: "Sports", id: 21 },
  { name: "Geography", id: 22 },
  { name: "History", id: 23 },
  { name: "Vehicles", id: 28 },
];

const Categories = ({ getQuestions }: PropsFromRedux) => {
  return (
    <div className="container--categories ">
      <div className="choices">
        {categories.map((category) => {
          const colorClass = (category.id % 4) + 1;
          return (
            <div
              key={category.id}
              className={`choice choice--${colorClass}`}
              onClick={() => getQuestions(category.id)}
            >
              {category.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const connector = connect(null, { getQuestions });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Categories);

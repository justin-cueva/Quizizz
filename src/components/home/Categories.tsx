import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";

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
      <div className="categories">
        {categories.map((category) => {
          const colorClass = (category.id % 4) + 1;
          return (
            <Link
              key={category.id}
              className={`link--to-quiz category category--${colorClass}`}
              to={"/quiz"}
              onClick={() => getQuestions(category.id)}
            >
              <div>{category.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const connector = connect(null, { getQuestions });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Categories);

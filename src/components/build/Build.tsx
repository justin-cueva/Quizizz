import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import Header from "./Header";
import CategoryTags from "./CategoryTags";
import Form from "./Form";
import CategoryQuestions from "./CategoryQuestions";
import { Question, Category } from "../../types";
import { getCategories } from "../../actions/buildActions";
import "../../styles/build/build.css";

const Build = ({ getCategories, categories }: PropsFromRedux) => {
  // **************
  const initBuildPage = () => {
    getCategories();
  };

  useEffect(() => initBuildPage(), []);

  // **************
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [questions, setQuestions] = useState<Question[]>();

  const fetchCategoryQuestions = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=25&difficulty=easy&type=multiple"
      );
      const data = await response.json();

      setQuestions(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategoryQuestions();
  }, [selectedCategory]);

  return (
    <div className="page--build">
      <Header />
      <div className="container--build-body">
        <CategoryTags
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        <Form />
        <CategoryQuestions questions={questions} />
      </div>
    </div>
  );
};

type RootState = {
  build: { categories: Category[]; categoryQuestions: {} };
};

const mapStateToProps = (state: RootState) => {
  return { categories: state.build.categories };
};

const connector = connect(mapStateToProps, { getCategories });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Build);

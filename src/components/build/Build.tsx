import { useEffect, useState, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";

import Header from "../reusables/Header";
import CategoryTags from "./CategoryTags";
import Form from "./Form";
import CategoryQuestions from "./CategoryQuestions";
import Message from "../reusables/Message";
import { Question, Category } from "../../types";
import { getCategories } from "../../actions/buildActions";
import "../../styles/build/build.css";
import { getACategoriesQuestions } from "../../actions/buildActions";
import {
  addQuestion,
  removeQuestion,
  nameQuiz,
  saveBuild,
} from "../../actions/myBuildActions";

const Build = ({
  categories,
  allCategoryQuestions,
  isLoggedIn,
  getCategories,
  getACategoriesQuestions,
  addQuestion,
  removeQuestion,
  nameQuiz,
  saveBuild,
  nameOfMyBuild,
}: PropsFromRedux) => {
  const initBuildPage = () => {
    getCategories();
  };
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    id: 25,
    name: "Art",
  });

  useEffect(() => initBuildPage(), []);

  useEffect(() => {
    getACategoriesQuestions(selectedCategory);
  }, [selectedCategory]);

  const links = isLoggedIn
    ? [
        { to: "/myQuizizz", name: "My Quizizz" },
        { to: "/", name: "Home" },
      ]
    : [
        { to: "/", name: "Home" },
        { to: "/auth", name: "Auth" },
      ];

  return (
    <div className="page--build">
      <Header page="Build a Quiz" links={links} />
      <div className="container--build-body">
        {!isLoggedIn && (
          <Message
            text={"login or create an account to start building a quiz"}
          />
        )}
        {isLoggedIn && (
          <Fragment>
            <CategoryTags
              categories={categories}
              setSelectedCategory={setSelectedCategory}
            />
            <Form
              nameQuiz={nameQuiz}
              nameOfMyBuild={nameOfMyBuild}
              saveBuild={saveBuild}
            />
            <CategoryQuestions
              addQuestion={addQuestion}
              removeQuestion={removeQuestion}
              questions={allCategoryQuestions[selectedCategory.id]}
            />
          </Fragment>
        )}
      </div>
    </div>
  );
};

type RootState = {
  myBuild: {
    name: string;
  };
  account: {
    isLoggedIn: boolean;
  };
  build: {
    categories: Category[];
    categoryQuestions: { [key: number]: Question[] };
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    categories: state.build.categories,
    allCategoryQuestions: state.build.categoryQuestions,
    isLoggedIn: state.account.isLoggedIn,
    nameOfMyBuild: state.myBuild.name,
  };
};

const connector = connect(mapStateToProps, {
  getCategories,
  getACategoriesQuestions,
  addQuestion,
  removeQuestion,
  nameQuiz,
  saveBuild,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Build);

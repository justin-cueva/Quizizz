import { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import Header from "../reusables/Header";
import CategoryTags from "./CategoryTags";
import Form from "./Form";
import CategoryQuestions from "./CategoryQuestions";
import { Question, Category } from "../../types";
import { getCategories } from "../../actions/buildActions";
import "../../styles/build/build.css";
import { getACategoriesQuestions } from "../../actions/buildActions";

const Build = ({
  getCategories,
  categories,
  getACategoriesQuestions,
  allCategoryQuestions,
  isLoggedIn,
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
        { to: "/myQuizizz", name: "my quizizz" },
        { to: "/", name: "home" },
      ]
    : [
        { to: "/", name: "home" },
        { to: "/auth", name: "auth" },
      ];

  return (
    <div className="page--build">
      <Header page="Build a Quiz" links={links} />
      <div className="container--build-body">
        <CategoryTags
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        <Form />
        <CategoryQuestions
          questions={allCategoryQuestions[selectedCategory.id]}
        />
      </div>
    </div>
  );
};

type RootState = {
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
  };
};

const connector = connect(mapStateToProps, {
  getCategories,
  getACategoriesQuestions,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Build);

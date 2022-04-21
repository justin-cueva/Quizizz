import Header from "./Header";

import { useEffect, useState } from "react";

import "../../styles/build/build.css";
import useCategories from "../../hooks/useCategories";
import { Question, Category } from "../../types";
import CategoryTags from "./CategoryTags";
import Form from "./Form";
import CategoryQuestions from "./CategoryQuestions";

const Build = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [questions, setQuestions] = useState<Question[]>();
  const { categories, error } = useCategories();

  const fetchCategoryQuestions = async () => {
    try {
      console.log("fetch");
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=25&difficulty=easy&type=multiple"
      );
      const data = await response.json();
      console.log(data);
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

export default Build;

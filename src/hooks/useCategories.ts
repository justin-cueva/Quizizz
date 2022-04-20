import { useState, useEffect } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://opentdb.com/api_category.php");

      const data = await response.json();

      setCategories(data.trivia_categories);
    } catch (err: any) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, error };
};

export default useCategories;

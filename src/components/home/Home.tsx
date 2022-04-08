import "../../styles/quiz/CurrentQuestion.css";
import "../../styles/quiz/Stats.css";
import Categories from "./Categories";
import Header from "./Header";

const Home = () => {
  return (
    <div
      style={{
        padding: "1rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Categories />
    </div>
  );
};

export default Home;

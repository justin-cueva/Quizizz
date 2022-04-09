import CurrentQuestion from "./CurrentQuestion";
import Stats from "./Stats";

const Quiz = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "1rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stats />
      <CurrentQuestion />
    </div>
  );
};

export default Quiz;

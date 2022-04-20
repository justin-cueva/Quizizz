import Header from "./Header";
import BuildBody from "./BuildBody";

const Build = () => {
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
      <BuildBody />
    </div>
  );
};

export default Build;

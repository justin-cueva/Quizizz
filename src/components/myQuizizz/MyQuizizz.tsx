import Header from "../reusables/Header";
import QuizizzContainer from "./QuizizzContainer";

const MyQuizizz = () => {
  const links = [
    { to: "/", name: "home" },
    { to: "/build", name: "build" },
  ];

  return (
    <div
      style={{
        padding: "1rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header page="My Quizizz" links={links} />
      <div className="container--build-body">
        <QuizizzContainer />
      </div>
    </div>
  );
};

export default MyQuizizz;

import { connect, ConnectedProps } from "react-redux";

import "../../styles/quiz/CurrentQuestion.css";
import "../../styles/quiz/Stats.css";
import Categories from "./Categories";
import Header from "../reusables/Header";

const Home = (props: PropsFromRedux) => {
  const links = props.isLoggedIn
    ? [
        { to: "/build", name: "Build" },
        { to: "/myQuizizz", name: "My Quizizz" },
      ]
    : [
        { to: "/auth", name: "Auth" },
        { to: "/build", name: "Build" },
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
      <Header page="Choose a Quiz" links={links} />
      <Categories />
    </div>
  );
};

type RootState = {
  account: { isLoggedIn: boolean; userId: string };
};

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.account.isLoggedIn,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);

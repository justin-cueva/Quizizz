import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import Header from "../reusables/Header";
import QuizizzContainer from "./QuizizzContainer";
import { fetchUsersQuizizz } from "../../actions/accountActions";

const MyQuizizz = (props: PropsFromRedux) => {
  const links = [
    { to: "/", name: "home" },
    { to: "/build", name: "build" },
  ];

  useEffect(() => {
    props.fetchUsersQuizizz();
  }, []);

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
        <QuizizzContainer usersQuizizz={props.usersQuizizz} />
      </div>
    </div>
  );
};

type RootState = {
  account: {
    usersQuizizz: [];
  };
};

const mapStateToProps = (state: RootState) => {
  return { usersQuizizz: state.account.usersQuizizz };
};

const connector = connect(mapStateToProps, { fetchUsersQuizizz });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MyQuizizz);

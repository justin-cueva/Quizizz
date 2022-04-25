import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import Quiz from "./quiz/Quiz";
import Home from "./home/Home";
import Summary from "./summary/Summary";
import Build from "./build/Build";
import Auth from "./auth/Auth";
import MyQuizizz from "./myQuizizz/MyQuizizz";
import { setLoggedIn } from "../actions/accountActions";

const App = (props: PropsFromRedux) => {
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      props.setLoggedIn();
      // change state to logged in
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/quiz/:quiz"} element={<Quiz />} />
          <Route path={"/summary"} element={<Summary />} />
          <Route path={"/build"} element={<Build />} />
          <Route path={"/auth"} element={<Auth />} />
          <Route path="/myQuizizz" element={<MyQuizizz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const connector = connect(null, { setLoggedIn });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);

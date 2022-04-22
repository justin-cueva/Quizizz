import { BrowserRouter, Route, Routes } from "react-router-dom";

import Quiz from "./quiz/Quiz";
import Home from "./home/Home";
import Summary from "./summary/Summary";
import Build from "./build/Build";
import Auth from "./auth/Auth";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/quiz/:quiz"} element={<Quiz />} />
          <Route path={"/summary"} element={<Summary />} />
          <Route path={"/build"} element={<Build />} />
          <Route path={"/auth"} element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

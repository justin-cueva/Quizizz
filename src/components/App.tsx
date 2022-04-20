import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Quiz from "./quiz/Quiz";
import Home from "./home/Home";
import Summary from "./summary/Summary";
import Build from "./build/Build";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/quiz/:quiz"} element={<Quiz />} />
          <Route path={"/summary"} element={<Summary />} />
          <Route path={"/build"} element={<Build />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

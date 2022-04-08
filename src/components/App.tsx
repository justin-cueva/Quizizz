import Quiz from "./quiz/Quiz";
import Home from "./home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/quiz"} element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

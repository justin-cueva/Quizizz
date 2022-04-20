import { useNavigate } from "react-router-dom";

import "../../styles/build/build.css";
import "../../styles/generals.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header header--build">
      <h2 className="heading--main">Build a Quiz</h2>
      <div className="link--header" onClick={() => navigate("/")}>
        home
      </div>
    </div>
  );
};

export default Header;

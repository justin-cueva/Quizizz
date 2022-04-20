import { useNavigate } from "react-router-dom";

import "../../styles/build/build.css";
import "../../styles/generals.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header header--home ">
      <h2 className="heading--main">Choose a Quiz</h2>
      <div className="link--header" onClick={() => navigate("/build")}>
        build
      </div>
    </div>
  );
};

export default Header;

import { useNavigate } from "react-router-dom";

import "../../styles/build/build.css";
import "../../styles/generals.css";
import "../../styles/home/header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header header--home ">
      <h2 className="heading--main">Choose a Quiz</h2>
      <div className="links--home-header">
        <div className="link--header" onClick={() => navigate("/auth")}>
          auth
        </div>
        <div className="link--header" onClick={() => navigate("/build")}>
          build
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useNavigate } from "react-router-dom";

import "../../styles/build/build.css";
import "../../styles/generals.css";
import "../../styles/home/header.css";

type Link = { to: string; name: string };

type Props = {
  page: string;
  links: Link[];
};

const Header = ({ page, links }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="header header--home ">
      <h2 className="heading--main">{page}</h2>
      <div className="links--home-header">
        {links.map((link, index) => {
          return (
            <div
              key={index}
              className="link--header"
              onClick={() => navigate(link.to)}
            >
              {link.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;

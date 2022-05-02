import { useNavigate } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";

import { logout } from "../../actions/accountActions";
import "../../styles/build/build.css";
import "../../styles/generals.css";
import "../../styles/home/header.css";

const Header = ({ page, links, isLoggedIn, logout }: Props) => {
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
        {isLoggedIn && (
          <button
            className="btn--logout"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        )}
        {!isLoggedIn && (
          <button
            className="btn--logout"
            onClick={() => {
              navigate("/auth");
            }}
          >
            Login
          </button>
        )}
      </div>
      <span className="icon--burger">
        <GiHamburgerMenu className="icon--burger" />
      </span>
    </div>
  );
};

type Link = { to: string; name: string };

type RootState = {
  account: { isLoggedIn: boolean };
};

const mapStateToProps = (state: RootState) => {
  return { isLoggedIn: state.account.isLoggedIn };
};

const connector = connect(mapStateToProps, { logout });

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  page: string;
  links: Link[];
};

export default connector(Header);

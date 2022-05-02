import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { createPortal } from "react-dom";

import { logout } from "../../actions/accountActions";
import "../../styles/build/build.css";
import "../../styles/generals.css";
import "../../styles/home/header.css";
import "../../styles/quiz/Modal.css";

const Header = ({ page, links, isLoggedIn, logout }: Props) => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>();

  useEffect(() => console.log(modalIsOpen), [modalIsOpen]);

  const burgerPortal = document.querySelector("#burger-modal");
  if (!burgerPortal) return <div></div>;

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
      {!modalIsOpen && (
        <span className="icon--burger" onClick={() => setModalIsOpen(true)}>
          <GiHamburgerMenu />
        </span>
      )}
      {modalIsOpen &&
        createPortal(
          <Fragment>
            <div
              className="overlay"
              onClick={() => setModalIsOpen(false)}
            ></div>
            <span
              className="icon--close-burger"
              onClick={() => setModalIsOpen(false)}
            >
              <ImCross />
            </span>
            <div className="burger-modal">
              <div className="burger-modal__links">
                {links.map((link, index) => {
                  return (
                    <div
                      key={index}
                      className=""
                      onClick={() => {
                        setModalIsOpen(false);
                        navigate(link.to);
                      }}
                    >
                      {link.name}
                    </div>
                  );
                })}
                {isLoggedIn && (
                  <button
                    className="btn--modal-auth"
                    onClick={() => {
                      setModalIsOpen(false);
                      logout();
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                )}
                {!isLoggedIn && (
                  <button
                    className="btn--modal-auth"
                    onClick={() => {
                      setModalIsOpen(false);
                      navigate("/auth");
                    }}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </Fragment>,
          burgerPortal
        )}
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

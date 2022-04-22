import { useState, useRef, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";

import { register, login } from "../../actions/accountActions";
import "../../styles/auth/form.css";

// DUMMY CREDENTIALS
// email: test@test.com
// pass: 123abc

const Form = (props: PropsFromRedux) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formMode, setFormMode] = useState<string>("LOGIN");

  const heading = formMode === "SIGN_UP" ? "Sign Up" : "Login";
  const submitButtonText = formMode === "SIGN_UP" ? "Create account" : "Login";
  const otherButtonText =
    formMode === "SIGN_UP"
      ? "Login with existing account"
      : "Create new account";

  const register = async (email: string, password: string) => {
    try {
      await props.register(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await props.login(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (formMode === "SIGN_UP") {
          register(email, password);
        }
        if (formMode === "LOGIN") {
          login(email, password);
        }

        setEmail("");
        setPassword("");
      }}
      className="auth__form"
    >
      <h3 className="auth__label">{heading}</h3>
      <div className="auth__fields">
        <div className="auth__field">
          <label>Your Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="auth__field">
          <label>Your Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="auth__actions">
        <button type="submit">{submitButtonText}</button>
        <button
          onClick={() =>
            setFormMode((prev) => (prev === "SIGN_UP" ? "LOGIN" : "SIGN_UP"))
          }
          type="button"
        >
          {otherButtonText}
        </button>
      </div>
    </form>
  );
};

const connector = connect(null, { register, login });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Form);

import { useState, useRef, Fragment } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

import "../../styles/auth/form.css";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formMode, setFormMode] = useState<string>("LOGIN");
  const [user, setUser] = useState<string>("");

  const heading = formMode === "SIGN_UP" ? "Sign Up" : "Login";
  const submitButtonText = formMode === "SIGN_UP" ? "Create account" : "Login";
  const otherButtonText =
    formMode === "SIGN_UP"
      ? "Login with existing account"
      : "Create new account";

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setUser(user.user.uid);
    } catch (err) {
      console.error(err);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setUser(user.user.uid);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    setUser("");
  };

  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (formMode === "SIGN_UP") register();
          if (formMode === "LOGIN") login();

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
      {user ? user : ""}
    </Fragment>
  );
};

export default Form;

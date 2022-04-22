import { useState, useRef } from "react";

import "../../styles/auth/form.css";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formMode, setFormMode] = useState<string>("LOGIN");

  const heading = formMode === "SIGN_UP" ? "Sign Up" : "Login";
  const submitButtonText = formMode === "SIGN_UP" ? "Create account" : "Login";
  const otherButtonText =
    formMode === "SIGN_UP"
      ? "Login with existing account"
      : "Create new account";

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formMode === "SIGN_UP") {
      console.log("tryingn to SIGN UP...");
      console.log(email);
      console.log(password);
    }
    if (formMode === "LOGIN") {
      console.log("trying to LOGIN...");
      console.log(email);
      console.log(password);
    }
    clearInputs();
  };

  return (
    <form onSubmit={(e) => submitHandler(e)} className="auth__form">
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

export default Form;

import classes from "./Login.module.css";
import Header from "../components/Header.js/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = JSON.parse(localStorage.getItem(email));
    if (data) {
      if (data.password === password) {
        props.onLogin();
        navigate("/home");
      } else {
        setErrorMessage("Wrong Password");
      }
    } else {
      setErrorMessage("User Does Not Exist");
    }
  };

  return (
    <div className={classes.Login}>
      <Header current="login" onOpen={props.onOpen} />
      <form className={classes.loginForm} onSubmit={loginHandler}>
        <h2>Login</h2>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter E-Mail"
            required
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          ></input>
        </div>
        <button type="submit">Login </button>
        {errorMessage !== "" && (
          <p className={classes.errorMessage}>{errorMessage}</p>
        )}
        <div className={classes.signIn}>
          {" "}
          <p>Don't have an account?</p>
          <pre> </pre>
          <p
            className={classes.link}
            onClick={() => {
              navigate("/");
            }}
          >
            Sign Up{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

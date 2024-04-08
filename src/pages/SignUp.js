import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.js/Header";

import classes from "./SignUp.module.css";

const SignUp = (props) => {
  let [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const signUpHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const profession = e.target.profession.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (localStorage.getItem(email)) {
      setErrorMessage("User exists");
    } else {
      localStorage.setItem(
        email,
        JSON.stringify({ name, phone, profession, email, password })
      );
      props.onSignUp();
      navigate('/home')
    }
  };

  return (
    <div className={classes.SignUp}>
      <Header current="signup" onOpen={props.onOpen} />
      <form className={classes.SignUpForm} onSubmit={signUpHandler}>
        <h2>Create an Account</h2>
        <input name="name" type="text" placeholder="Enter your Name" required />
        <input
          name="phone"
          type="text"
          placeholder="Enter your phone number"
          required
        />
        <select name="profession" required>
          <option value="">Select your Profession</option>
          <option value="Doctor">Doctor</option>
          <option value="Engineer">Engineer</option>
          <option value="Lawyer">Lawyer</option>
          <option value="Human Resources">Human Resources</option>
        </select>
        <input
          name="email"
          type="mail"
          placeholder="Enter E-Mail"
          required
        ></input>
        <input
          name="password"
          type="password "
          placeholder="Enter Password"
          required
        ></input>

        <button type="submit">Login </button>
        {errorMessage !== "" && (
          <p className={classes.errorMessage}>{errorMessage}</p>
        )}
        <div className={classes.signIn}>
          {" "}
          <p>Already have an account?</p>
          <pre> </pre>
          <p
            className={classes.link}
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign In{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

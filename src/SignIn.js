import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./SignIn.css";
function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="signin">
        <Link to="/">
          <img
            className="amazon_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
            alt=""
          />
        </Link>
        <div className="signin_form">
          <h1>Sign-In</h1>
          <form action="">
            <h5>Email</h5>
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              onClick={signIn}
              className="signin_continueButton"
              type="submit"
            >
              Continue
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>
        <div className="signin_createUser">
          <button onClick={register} className="signin_newUserButton">
            Create your Amazon account
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

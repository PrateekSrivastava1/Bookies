import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./SignIn.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
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
    <>
      {/* https://i.ibb.co/KxSpZLm/unlock.png */}
      <div className="body">
        <section className="Form my-4 mx-5">
          <div className="container cont">
            <div className="row no-gutters ">
              <div className="col-lg-5 ">
                <img
                  className="image"
                  src="https://i.ibb.co/KxSpZLm/unlock.png"
                  alt=""
                />
              </div>
              <div className="col-lg-7 px-5">
                <form className="text-center">
                  <div className="form-row">
                    <div className="col-lg-7">
                      <TextField
                        className="form-control my-3 p-3"
                        // label="With a grid"
                        id="standard-start-adornment"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              Email:
                            </InputAdornment>
                          ),
                        }}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-7">
                      <TextField
                        className="form-control my-3 p-3"
                        id="standard-basic"
                        // label="With a grid"
                        id="standard-start-adornment"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              Password:
                            </InputAdornment>
                          ),
                        }}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-7">
                      <button
                        type="button"
                        className="btn btn-outline-primary bttt"
                        onClick={signIn}
                      >
                        Sign In
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary m-3"
                        onClick={register}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignIn;

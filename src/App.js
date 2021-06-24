import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cart from "./Cart";
import SignIn from "./SignIn";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import TestCart from "./TestCart";
import Firstwindow from "./Firstwindow";
import More from "./More";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
const promise = loadStripe(
  "pk_test_51J2xnJSF9T1v6nUZNUFLctUiiNQSGoZpYg8OIIUyuqUINVOiV9ZtLLOgSbmY8zn5bEIApAniuDPYJ5zIakjaCiJE00U8UqazMS"
);

function App() {
  const [{}, setUser] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The auth user -> ", authUser);
      if (authUser) {
        setUser({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        setUser({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/more">
            <Header />
            <More />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/testCart">
            <TestCart />
          </Route>
          <Route exact path="/check">
            <Firstwindow />
          </Route>
          <Route exact path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

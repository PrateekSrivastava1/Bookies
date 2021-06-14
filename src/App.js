import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import SignIn from "./SignIn";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./headerr.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { getTotalAmount } from "./Reducer";
import CurrencyFormat from "react-currency-format";
import StoreMallDirectoryRoundedIcon from "@material-ui/icons/StoreMallDirectoryRounded";
import { NavLink } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import Badge from "@material-ui/core/Badge";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
function Header() {
  const [{ cart, user }, setCart] = useStateValue();

  const signout = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="container-fluid nav_bg fixed-top">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg  navbar-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand logo my-lg" to="/">
                  <strong>Bookies</strong>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        style={{ textDecoration: "none" }}
                        activeClassName="menu_active"
                        exact
                        className="nav-link"
                        to={"/"}
                      >
                        <Badge color="secondary">
                          <HomeIcon className="button" />
                          Home
                        </Badge>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to={user == null && "/signin"}
                        style={{ textDecoration: "none" }}
                      >
                        <div onClick={signout} className="header_option">
                          {/* String name = user.getDisplayName(); */}
                          <PersonIcon className="button" />

                          {!user ? "Hello Buddy!" : "."}
                          {user ? "Sign Out" : " Sign In?"}
                        </div>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={{ textDecoration: "none" }}
                        activeClassName="menu_active"
                        exact
                        className="nav-link"
                        to={user != null && "/orders"}
                      >
                        <Badge color="secondary">
                          <StoreMallDirectoryRoundedIcon className="button" />
                          Orders
                        </Badge>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={{ textDecoration: "none" }}
                        exact
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/cart"
                      >
                        <CurrencyFormat
                          renderText={(value) => (
                            <Badge badgeContent={value} color="secondary">
                              <AccountBalanceIcon className="button" />
                            </Badge>
                          )}
                          decimalScale={2}
                          value={getTotalAmount(cart)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₹"}
                        />
                        CR
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        style={{ textDecoration: "none" }}
                        exact
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/cart"
                      >
                        <Badge badgeContent={cart?.length} color="secondary">
                          <ShoppingCartIcon className="button" />
                        </Badge>
                        CART
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

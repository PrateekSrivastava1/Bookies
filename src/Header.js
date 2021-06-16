import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { getTotalAmount } from "./Reducer";
import CurrencyFormat from "react-currency-format";

function Header() {
  const [{ cart, user }, setCart] = useStateValue();

  const signout = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={user == null && "/signin"}>
          <div onClick={signout} className="header_option">
            {/* String name = user.getDisplayName(); */}
            <span className="header_option1">
              Hello {!user ? "Stalker" : "User"} !
            </span>
            <span className="header_option2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option1">CR</span>
          <CurrencyFormat
            renderText={(value) => (
              <span className="header_option2">
                <strong>{value}</strong>
              </span>
            )}
            decimalScale={2}
            value={getTotalAmount(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </div>
        <Link to="/cart">
          <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header_option2 header_basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

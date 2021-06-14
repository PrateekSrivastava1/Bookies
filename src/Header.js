import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {

  const [{cart}, setCart] = useStateValue();

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
        <Link to="/signin">
        <div className="header_option">
          <span className="header_option1">Hello user!</span>
          <span className="header_option2">SignIn</span>
        </div>
        </Link>
        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option1">your</span>
          <span className="header_option2">prime</span>
        </div>
        <Link to="/cart">
          <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header_option2 header_basketCount">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

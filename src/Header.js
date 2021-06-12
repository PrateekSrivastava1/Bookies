import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon"/>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_option1">Hello user!</span>
          <span className="header_option2">SignIn</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option1">your</span>
          <span className="header_option2">prime</span>
        </div>
        <div className="header_optionBasket">
        <ShoppingCartIcon/>
        <span className="header_option2 header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

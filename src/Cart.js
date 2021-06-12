import React from "react";
import "./Cart.css";
import Subtotal from "./Subtotal";

function Cart() {
  return (
    <div className="cart">
      <div className="cart_left">
        <div>
          {/* <h2>heya</h2> */}
          <h2 className="cart_heading">Shopping Cart</h2>
        <Subtotal/>
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
        </div>
      </div>
      <div className="cart_right">
        <h2>total</h2>
      </div>
    </div>
  );
}

export default Cart;

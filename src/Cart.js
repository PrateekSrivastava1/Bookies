import React from "react";
import "./Cart.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CartItems from "./CartItems";
function Cart() {
  const [{ cart, user }, setCart] = useStateValue();

  return (
    <div className="cart">
      <div className="cart_left">
        <div>
          <h2 className="cart_heading">Shopping Cart</h2>
          {cart.map((item) => (
            <CartItems
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="cart_right">
        <div className="subtotal">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Cart;

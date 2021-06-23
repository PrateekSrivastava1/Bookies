import React from "react";
import "./Cart.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import CartItems from "./CartItems";
function Cart() {
  const [{ cart, user }, setCart] = useStateValue();

  return (
    <>
      <div className="smallContainer cartPage">
        <table>
          <tr>
            <th>Product</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <div>
              {/* <h2 className="cart_heading">Shopping Cart</h2> */}
              {cart.map((item) => (
                <CartItems
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </tr>
        </table>
        <div className="totalPrice">
          <table>
            <tr>
              <Subtotal />
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart;

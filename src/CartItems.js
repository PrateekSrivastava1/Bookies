import React from "react";
import "./CartItems.css";
import { useStateValue } from "./StateProvider";
function CartItems({ id, title, image, price, rating }) {
  
  const [{cart}, setCart] = useStateValue();
 
  const deleteItem = () => {
    setCart({
      type: "REMOVE_FROM_CART",
      id: id,
    })
  }
  return (
    <div className="cartItems">
      <img className="cartProduct_image" src={image} alt="" />
      <div className="cartProduct_description">
        <p className="cartProduct_title">{title}</p>
        <p className="cartProduct_price">
          <strong>₹</strong>
          <strong>{price}</strong>
        </p>
        <div className="cartProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={deleteItem}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CartItems;

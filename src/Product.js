import React from "react";
import "./Product.css";
// import { useState } from "react";
import { useStateValue } from "./StateProvider";
function Product({ key, id, title, image, price, rating }) {
 const [{cart}, setCart] = useStateValue();
 const addToCart = () => {
  setCart({
    type: "ADD_TO_CART",
    item: {
      key: id,
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    },
  });
 };

  return (
    <>
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <strong>₹ </strong>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
      className="image"
        src={image}
        alt=""
      />
      <button onClick={addToCart} >Add to cart</button>
    </div>
    </>
  );
}

export default Product;

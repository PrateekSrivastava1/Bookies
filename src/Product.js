import React from "react";
import "./Product.css";
// import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GetAppIcon from "@material-ui/icons/GetApp";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import { useStateValue } from "./StateProvider";
function Product({
  download,
  key,
  id,
  title,
  image,
  price,
  rating,
  hideButton,
}) {
  const [{ cart }, setCart] = useStateValue();
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
      {/* 
     {!hideButton &&  <IconButton
                    onClick={deleteItem}
                    aria-label="Delete from cart"
                    className="delete"
                  >
                    <DeleteTwoToneIcon fontSize="large" />
                  </IconButton>}
                   */}
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
        <img className="image" src={image} alt="" />
        {/* <button onClick={addToCart}>Add to cart</button> */}
        <div>
          <div>
            {!hideButton ? (
              <IconButton aria-label="add to shopping cart">
                <AddShoppingCartSharpIcon
                  className="button"
                  fontSize="large"
                  onClick={addToCart}
                />
              </IconButton>
            ) : (
              <IconButton
                href={download}
                attributes-list
                download
                target="_blank"
                aria-label="add to shopping cart"
              >
                <GetAppIcon className="button" fontSize="large" />
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

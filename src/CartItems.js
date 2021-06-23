import React from "react";
// import "./CartItems.css";
import Subtotal from "./Subtotal";
import IconButton from "@material-ui/core/IconButton";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import "./TestCart.css";
import { useStateValue } from "./StateProvider";
function CartItems({ key, id, title, image, price, rating, hideButton }) {
  const [{ cart }, setCart] = useStateValue();

  const deleteItem = () => {
    setCart({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <>
      <div className="smallContainer cartPage">
        <table>
          <tr>
            <td>
              <div className="cart-info">
                <img src={image} alt="" />
                <div>
                  <p>{title}</p>
                  <div className="cartProduct_rating">
                    {Array(rating)
                      .fill()
                      .map((_, i) => (
                        <p>⭐</p>
                      ))}
                  </div>
                  <br />
                  {!hideButton &&  <IconButton
                    onClick={deleteItem}
                    aria-label="Delete from cart"
                    className="delete"
                  >
                    <DeleteTwoToneIcon fontSize="large" />
                  </IconButton>}
                </div>
              </div>
            </td>
            {/* <td>
              <input type="number" value="1" />
            </td> */}
            <td>
              <strong>₹</strong>
              <strong>{price}</strong>
            </td>
          </tr>
        </table>
        <div className="totalPrice">
          <table>
            <tr>
              {/* <td>Subtotal</td>
              <td>Rs 5050505</td> */}
              {/* <Subtotal /> */}
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default CartItems;

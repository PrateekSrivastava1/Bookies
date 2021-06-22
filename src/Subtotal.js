import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getTotalAmount } from "./Reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ cart }, setCart] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <strong>
              Subtotal ({cart.length} items): {value}
              </strong>
          </>
        )}
        decimalScale={2}
        value={getTotalAmount(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button type="button" onClick={(event) => history.push("/payment")}>Buy now</button>
     
    </div>
  );
}

export default Subtotal;

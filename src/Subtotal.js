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
            <p>
            {/* console.log(value); */}
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getTotalAmount(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={event => history.push("/payment")} >Buy</button>
    </div>
  );
}

export default Subtotal;

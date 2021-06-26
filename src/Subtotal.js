import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getTotalAmount } from "./Reducer";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
function Subtotal() {
  const history = useHistory();
  // const [{ cart }, setCart] = useStateValue();
  const [{ cart, user }, setCart] = useStateValue();

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
      {/* <Link to={(cart.length == 0 && user != null) ? "/payment" : "/signin" }> */}
      <Link to={((user === null && "/signin")) || ((cart.length === 0 && user !== null) && "/") || ((cart.length !== 0 && user !== null) && "/payment") }>

        {/* <button type="button" onClick={(event) => history.push("/payment")} Buy now > </button> */}
        <Button
          variant="contained"
          color="primary"
          className="butt"
        >
          Buy now
        </Button>
      </Link>
    </div>
  );
}

export default Subtotal;

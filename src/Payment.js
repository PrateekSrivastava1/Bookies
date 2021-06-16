import React, { useState } from "react";
import "./Payment.css";
import CartItems from "./CartItems";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getTotalAmount } from "./Reducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import axios from "./axios";
function Payment() {
  const [{ cart, user }, setCart] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [enabled, setEnabled] = useState(true);
  const [userSecret, setUserSecret] = useState(true);
  const payment = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(userSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymetIntend }) => {
        setEnabled(true);
        setError(null);
        setProcessing(true);
        useHistory.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  useEffect(() => {
    const getSecret = async () => {
      const secret = await axios({
        method: "post",
        url: `/payments/create?total=${getTotalAmount(cart) * 100} `,
      });
      setUserSecret(secret.data.userSecret);
    };
    getSecret();
  }, [cart])

  console.log("useSecret: ", userSecret);

  return (
    <div className="payment">
      <div className="paymentBox">
        <h1>
          Your Cart(<Link to="/Cart">{cart.length} Items</Link>)
        </h1>
        <div className="paymentRow">
          <div className="userInfo">
            <h3>Delivery Info</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>address line</p>
            <p>address line</p>
          </div>
        </div>
        <div className="paymentRow">
          <div className="userInfo">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="cartProductPaymentItems">
            {cart.map((i) => (
              <CartItems
                id={i.id}
                title={i.title}
                image={i.image}
                price={i.price}
                rating={i.rating}
              />
            ))}
          </div>
        </div>
        <div className="paymentRow">
          <div className="userInfo">
            <h3>Payment method</h3>
          </div>
          <div className="stripeDetail">
            <form action="" onSubmit={payment}>
              <CurrencyFormat
                renderText={(value) => <h3>Total Price: {value}</h3>}
                decimalScale={2}
                value={getTotalAmount(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
              <CardElement onChange={handleChange} />
              <div className="totalAmount">
                <button disabled={processing || disabled || enabled}>
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

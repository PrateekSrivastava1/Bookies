import React, { useState } from "react";
import "./Payment.css";
import CartItems from "./CartItems";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getTotalAmount } from "./Reducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import axios from "./axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { auth, db } from "./firebase";
import lottie from "lottie-web";
function Payment() {
  const [{ cart, user }, setCart] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [userSecret, setUserSecret] = useState(true);

  useEffect(() => {
    const getSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getTotalAmount(cart) * 100} `,
      });
      setUserSecret(response.data.userSecret);
    };
    getSecret();
  }, [cart]);

  console.log("this userSecret is =>>>>", userSecret);

  const payment = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(userSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("Customer")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setEnabled(true);
        setError(null);
        setProcessing(false);

        setCart({
          type: "EMPTY_CART",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <>
    
      {/* Stripe payment png: https://i.ibb.co/VTLQdYT/stripe.png */}
      {/* payment png: https://i.ibb.co/gDmsyg1/patment.png */}

      <div className="body">
        <section className="Form my-4 mx-5">
          <div className="container cont">
            <div className="row no-gutters ">
              <div className="col-lg-5 ">
                <img
                  className="image"
                  src="https://i.ibb.co/VTLQdYT/stripe.png"
                  alt=""
                />
              </div>
              <div className="col-lg-7 px-5">
                <h4 className="font-weight-bold py-3 .d-sm-flex">User ID:</h4>
                <span>{user?.email}</span>
                <form className="text-center" onSubmit={payment}>
                  <div className="form-row">
                    <div className="col-lg-7">
                      <h4 className=" my-3 p-3">
                        <CurrencyFormat
                          renderText={(value) => <h3>Total Price: {value}</h3>}
                          decimalScale={2}
                          value={getTotalAmount(cart)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₹"}
                        />
                      </h4>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-7 col-sm-7" >
                      <CardElement
                        className="form-control  my-4 p-4"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row"> 
                    <div className="col-lg-7">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-lg bt mb-5"
                        disabled={processing || disabled || enabled}
                      >
                        <span>
                          {processing ? <p>Processing</p> : "Buy now"}
                        </span>
                      </button>
                      {error && <div>{error}</div>}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Payment;

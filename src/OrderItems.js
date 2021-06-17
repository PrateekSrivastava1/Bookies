import moment from "moment";
import React from "react";
import { useStateValue } from "./StateProvider";
import CartItems from "./CartItems";
import CurrencyFormat from "react-currency-format";
import "./OrderItems.css";
import { getTotalAmount } from "./Reducer";

function OrderItems({ order }) {
  const [{ cart }, setCart] = useStateValue();

  return (
    <div className="orders">
      <h1>orderItems</h1>
      <p>{moment.unix(order.data.created).format("Do MMMM YYYY, h:ma")}</p>
      <p className="orderId">
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}

      <div className="orderTotal">
        <CurrencyFormat
          renderText={(value) => (
            <h3>
              Total Cost: <strong>{value}</strong>
            </h3>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
      </div>
    </div>
  );
}

export default OrderItems;

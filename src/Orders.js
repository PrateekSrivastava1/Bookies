import "./Orders.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";
import Footer from "./Footer";

import { useStateValue } from "./StateProvider";
import OrderItems from "./OrderItems";
function Orders() {
  const [order, setOrder] = useState([]);
  const [{ cart, user }, setCart] = useStateValue();
  useEffect(() => {
    if (user) {
      db.collection("Customer")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrder(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrder([]);
    }
  }, [user]);

  return (
    <>
      <div className="orders_box">
        <h1> Your Orders: </h1>
        <div className="orderItems">
          {order?.map((order) => (
            <OrderItems order={order} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Orders;

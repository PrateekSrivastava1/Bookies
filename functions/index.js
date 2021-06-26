const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51J2xnJSF9T1v6nUZ7gVuy3JqYPfwO1xBBLv4airaJOSazfAu3Zsyde2ad3xTO48mPlFAIjTkejeLXcHazMNWrqg300Yvi6JFua"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (req, res) => res.status(200).send("perfect"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  res.status(201).send({
    userSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

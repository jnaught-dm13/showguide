const configureStripe = require("stripe");

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === "production"
    ? "sk_test_wlVg0LvvHxpLoocvyQVe99LA"
    : "sk_test_wlVg0LvvHxpLoocvyQVe99LA";

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;

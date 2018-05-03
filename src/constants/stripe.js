const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_test_v8JRc4eOO8E0PhHAwQbMsUvp"
    : "pk_test_v8JRc4eOO8E0PhHAwQbMsUvp";

export default STRIPE_PUBLISHABLE;

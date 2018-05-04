const Auth0Strategy = require("passport-auth0");

const { CLIENT_ID, CLIENT_SECRET, DOMAIN } = process.env;

const strat = new Auth0Strategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    domain: DOMAIN,
    scope: "openid profile",
    callbackURL: "/login"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    console.log("authStrat: ", profile);
    return done(null, profile);
  }
);

const getUser = (req, res) => {
  if (!req.user) {
    res.status(401).json({ message: "Not Authorized" });
  } else {
    res.status(200).json(req.user);
  }
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/#/");
  });
};

module.exports = {
  strat,
  getUser,
  logout
};

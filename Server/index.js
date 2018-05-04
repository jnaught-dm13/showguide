require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const SERVER_CONFIGS = require("./constants/server");

const path = require("path");

const configureServer = require("./server");
const configureRoutes = require("./routes");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const streamBaseURL = "'https://api.stream-io-api.com/api/v1.0/'";
const {
  addToFavorite,
  getFavorite,
  removeFavorite,
  updateWatch,
  getWatched,
  removeWatch,
  getCount
} = require(`${__dirname}/controllers/favoriteCtrl`);
const { strat, logout, getUser } = require(`${__dirname}/controllers/authCtrl`);
const { search, getStream } = require(`${__dirname}/controllers/searchCtrl`);
const app = express();

app.use(express.static(`${__dirname}/../build`));

configureServer(app);
configureRoutes(app);

const port = process.env.PORT || 3001;

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
    // cookie: {
    //   maxAge: 3600 * 24
    // }
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(strat);

passport.serializeUser((user, done) => {
  app
    .get("db")
    .getUserByAuthid(user.id)
    .then(response => {
      if (!response[0]) {
        console.log(user);
        app
          .get("db")
          .addUserByAuthid([user.displayName, user.id, user.picture])
          .then(res => {
            console.log("added: ", res);
            return done(null, res[0]);
          })
          .catch(err => console.log(err));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});
app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/#/login"
  })
);
app.get("/logout", logout);
app.get("/api/me", getUser);

app.get("/api/search/:query");
app.get("/api/favorite", getFavorite);
app.get("/api/count/:show_id", getCount);
app.post("/api/favorite", addToFavorite);
app.delete("/api/favorite/:id", removeFavorite);
app.delete("/api/favorite/:ep_id/:show_id", removeWatch);
app.put("/api/favorite", updateWatch);
app.get("/api/favorite/:show", getWatched);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

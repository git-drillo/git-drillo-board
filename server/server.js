const express = require("express");
const path = require("path");
const passportSetup = require("./config/passport-setup");
const passport = require("passport");

require("dotenv/config");

const app = express();

// Bring in routes
const authRoute = require("./routes/auth-route");
const apiRoute = require("./routes/api-route");

// Body Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

// Use routes
app.use("/auth", authRoute);
app.use("/api", apiRoute);

// Serve static files in production mode
if (process.env.NODE_ENV === "production") {
  app.use("/dist", express.static(path.resolve(__dirname, "../dist")));

  // Home endpoint
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../index.html"));
  });
}

///TEST FOR DEV
//app.get("/", (req, res) => {
// res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"));
// res.send('HOME')
//});

// Global Error handler
app.use((err, req, res, next) => {
  // Set up default error
  const defaultError = {
    log: "Error caught in global error handler",
    status: 500,
    msg: {
      err: "Check logs for more information",
    },
  };

  // Update default error message with provided error if there is one
  const output = Object.assign(defaultError, err);

  res.send(output);
});

// const PORT = process.env.PORT || 8080;
const PORT = 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

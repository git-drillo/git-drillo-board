const passport = require('passport');
require('dotenv').config();

const GithubStrategy = require('passport-github2');

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

const db = require('../db/postgres.js');

// Configure the Github strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Github API on the user's
// behalf, along with the user's profile.  The function must invoke callback
// with a user object, which will be set at `req.user` in route handlers after
// authentication.

passport.use(
  new GithubStrategy(
    {
      //https://github.com/login/oauth/authorize
      //will be given through API. used to identify our app to github
      clientID: GITHUB_CLIENT_ID,
      //will be given through API. used to identify our app to github
      clientSecret: GITHUB_CLIENT_SECRET,
      //callback url that sends client to github login page
      callbackURL: '/auth/github/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      //basic 4 params -> getting github profile information from auth-route
      /** passport callback fn
       * acessToken - is how we will make an API call on behalf of the user. It is sent to us by github in the response.
       * refreshToken - is a token that can refresh the access token if it 'times out'.
       * profile - is the user's record in Github. We associate this profile with a user record in our application database.
       * done - after getting successully authenticated - run this callback function
       * routes to 'authenticated page' w/ correct user information
       **/

      console.log('PASSPORT CALLBACK FIRED', profile.username);

      const { username } = profile;

      const selectQuery = `SELECT * FROM users WHERE githandle='${username}'`;
      const insertQuery = `INSERT INTO users (id, githandle) VALUES (uuid_generate_v4(), $1) RETURNING *`;
      console.log(done);
      db.query(selectQuery)
        .then(data => {
          console.log(data.rows);
          if (data.rows.length > 0) {
            return done(null, data.rows[0]);
          } else {
            db.query(insertQuery, [username])
              .then(user => {
                return done(null, user.rows[0]);
              })
              .catch(err => console.log(err));
          }
        })
        .catch(err => console.log(err));
    }
  )
);

/**  Configure Passport authenticated session persistence.
 *
 * In order to restore authentication state across HTTP requests, Passport needs
 * to serialize users into and deserialize users out of the session.  We
 * supply the user ID when serializing, and query the user record by ID
 * from the database when deserializing.
 **/
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// get user id from the cookie
passport.deserializeUser(function (id, done) {
  const findUserQuery = `SELECT * FROM users WHERE id = $1`;

  db.query(findUserQuery, [id]).then(user => {
    done(null, user); // done is used to progress to the next middleware
  });
});

// http://localhost:8080/auth/github/callback?code=ef27d84d1d5cbf908bb6

// // Configure view engine to render EJS templates.
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// // Use application-level middleware for common functionality, including
// // logging, parsing, and session handling.
// app.use(require('morgan')('combined'));
// app.use(require('cookie-parser')());
// app.use(require('body-parser').urlencoded({ extended: true }));
// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// // Initialize Passport and restore authentication state, if any, from the
// // session.
// app.use(passport.initialize());
// app.use(passport.session());

const passport = require("passport");
require('dotenv').config();

const GithubStrategy = require('passport-github2');

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET }  = process.env;

console.log('INSIDE passport-setup.js')
passport.use(
    new GithubStrategy({
        //https://github.com/login/oauth/authorize
            //will be given through API
        clientID: GITHUB_CLIENT_ID,
            //will be given through API
        clientSecret: GITHUB_CLIENT_SECRET,
            //callback url that sends client to github login page
        callbackURL: "http://localhost:8080/auth/github/callback"
    }, (accessToken, refreshToken, profile, done) => { //basic 4 params -> getting profile information from auth-route
            //passport callback fn
        //after getting successully authenticated - run this callback function
        //routes to 'authenticated page' w/ correct user information
            console.log('PASSPORT CALLBACK FIRED', profile)
            // return done(null, false);
 //HAVE TO CHANGE 'User'           
            //User -> if exists, return finalized message and redirect
            //      -> if not, adds user to database
            // User.findOrCreate({ githubId: profile.id }, (err, user) => {
            //     return done(err, user);
            // });
    }
));

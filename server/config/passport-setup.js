const passport = require("passport");

const GithubStrategy = require('passport-github2');

passport.use(
    new GithubStrategy({
        //callback url that sends client to github login page
        callbackURL: '/auth/github/redirect',
        //https://github.com/login/oauth/authorize
        //will be given through API
        clientID: null,
        //will be given through API
        clientSecret: null,
    }), (accessToken, refreshToken, profile, done) => { //basic 4 params -> getting profile information from auth-route
            //passport callback fn
        //after getting successully authenticated - run this callback function
        //routes to 'authenticated page' w/ correct user information
        console.log('PASSPORT CALLBACK FIRED')
        console.log(profile)
    }
);

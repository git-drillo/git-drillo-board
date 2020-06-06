const router = require('express').Router();
const passport = require('passport');

//github login

//  using passport to authenticate the github 
// (after requiring the passport-setup.js in the server.js and adding the appropriate /auth route)
router.get('/github', passport.authenticate('github', {
    //what information will be returned once authenticated (TO BE CHANGED)
    scope: ['profile']
}));


//callback route for github to redirect (from passport-setup.js)
router.get('/github/redirect', (req, res) => {
    //test stuff
    res.send('reached callback URI')
});
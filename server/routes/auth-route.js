const router = require('express').Router();
const passport = require('passport');

<<<<<<< HEAD
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
=======
/**
 * @route   GET /auth
 * @desc    Allow users to sign into application using their Github account
 * @access  Public
 */
router.get('/github', (req, res) => {
  res.send('logging into github');
});

/**
 * @route   GET /auth
 * @desc    Testing GET requests for auth route
 * @access  Public
 */
router.get('/', (req, res) => {
  res.send('Hitting auth GET endpoint!');
});

module.exports = router;
>>>>>>> a6cc59fe55243cda31f4e302bef75b7b20389ac4

const router = require('express').Router();
const passport = require('passport');

//github login

//  using passport to authenticate the github 
// (after requiring the passport-setup.js in the server.js and adding the appropriate /auth route)

router.get('/github',
  passport.authenticate('github', {
    scope: [ 'user:email' ] 
}));

router.get('/fail', (req, res) => {
    res.status(200).send('FAILURE TO AUTHENTICATE');
})


//callback route for github to redirect (from passport-setup.js)
// router.get('/github/redirect', (req, res) => {
//     //test stuff
//     // res.redirect("https://github.com/login/oauth/authorize")
// });

router.get('/github/callback', 
  passport.authenticate('github', { 
      //if failure to authenticate:
        //placeholder
      failureRedirect: '/fail' 
    }),
    (req, res) =>{
        //if successful authentication:
        // res.redirect('/');
        console.log('SUCCESSFUL AUTHENTICATION')
        res.sendStatus(200)
    }
);


module.exports = router;
const router = require('express').Router();

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

const router = require('express').Router();

/**
 * @route   GET /api
 * @desc    Testing GET requests for api route
 * @access  Public
 */
router.get('/', (req, res) => {
  res.send('Hitting api GET endpoint!');
});

/**
 * @route   GET /api
 * @desc    Testing GET requests for api route
 * @access  Public
 */
router.post('/', (req, res) => {
  res.send('Hitting api POST endpoint');
});

/**
 * @route   GET /api/projects/:id
 * @desc    Returns an array of projects associated with a particular user
 * @access  Public (should be private)
 */
router.get('/projects/:id', (req, res) => {
  // SQL query for projects of particular user
  res.send(`Getting projects of user with id #${req.params.id}`);
});

module.exports = router;

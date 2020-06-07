const router = require('express').Router();
const db = require('../db/postgres');
require('dotenv/config')

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
router.get('/projects/:id', async (req, res, next) => {
  try {
    console.log(process.env.PG_URI)
    const id = req.params.id
    const query = `
    SELECT * FROM projects
    WHERE project_owner = '${id}';`;

    const result = await db.query(query);

    return res.json({ data: result.rows });

  } catch ({ message: msg }) {
    return next({ msg });
  }

  // res.send(`Getting projects of user with id #${req.params.id}`);
});

module.exports = router;

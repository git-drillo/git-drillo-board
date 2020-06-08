const router = require("express").Router();
const db = require("../db/postgres");
require("dotenv/config");

const taskController = require('../controllers/taskController.js');

/**
 * @route   GET /api
 * @desc    Testing GET requests for api route
 * @access  Public
 */
router.get("/", (req, res) => {
  res.sendStatus(200);
});


/**
 * @route   GET /api
 * @desc    Testing GET requests for api route
 * @access  Public
 */
router.post("/", (req, res) => {
  res.send("Hitting api POST endpoint");
});


/**
 * @route   GET /api/projects/
 * @desc    Returns an array of projects associated with a particular user
 * @access  Public (should be private)
 */
router.get("/projects/", async (req, res, next) => {
  try {
    // User ID is stored in the userId cookie
    const id = req.cookies.userId;
    const query = `
    SELECT * FROM projects
    WHERE project_owner = '${id}';`;

    const result = await db.query(query);
    return res.json(result.rows);
  } catch ({ message: msg }) {
    return next({ msg });
  }
});

/**
 * @route   GET /api/tasks/:project_id
 * @desc    Returns all tasks associated with a particular project in two arrays based on status
 * @access  Public (should be private)
 */
router.get("/tasks/:project_id", async (req, res) => {
  try {
    const id = req.params.project_id;
    const inProgressQuery = `
      SELECT * FROM tasks
      WHERE project_id = '${id}'
      AND status = 'in progress';`;

    const doneQuery = `
      SELECT * FROM tasks
      WHERE project_id = '${id}'
      AND status = 'done';`;

    const inProgressResult = await db.query(inProgressQuery);
    const doneResult = await db.query(doneQuery);

    res.json({
      inProgress: inProgressResult.rows,
      done: doneResult.rows,
    });
  } catch ({ message: msg }) {
    return next({ msg });
  }
});

/**
 * @route   POST /api/tasks/:project_id
 * @desc    Create a new task for a particular project
 * @access  Public (should be private)
 */
<<<<<<< HEAD
router.post("/api/tasks/:project_id", async (req, res) => {
=======
router.post('/tasks/:project_id', async (req, res) => {
>>>>>>> edab955764f0c26fa7ca43b7b837f4bc9203e5f5
  try {
    // Get project id
    const id = req.params.id;

    // Get dev that was assigned to task
    const { assignedDev } = req.body;

    // (Probably can be handled with subqueries)
    const devQuery = `
      SELECT id FROM users
      WHERE githandle = $1;`;

    // Get the assigned dev's id
    const devResult = await db.query(devQuery, [assignedDev]);
    const devId = devResult.rows[0].id;

    const query = `
      INSERT INTO tasks (id, ispending, status, project_id, task_assignee)
      VALUES (uuid_generate_v4(), 'f', 'in progress', $1, $2)
      RETURNING *;`;

    const result = await db.query(query, [id, devId]);

    res.json({
      message: `${assignedDev} was assigned task ID ${result.rows[0].id}`,
      task: result.rows[0],
    });
  } catch ({ message: msg }) {
    return res.status(400).json({ msg });
  }
});

router.get('/refresh', 
taskController.getCommits, 
taskController.parseCommits,
(req, res) => {
  res.sendStatus(200);
});

module.exports = router;
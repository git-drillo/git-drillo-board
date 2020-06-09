const router = require("express").Router();
const db = require("../db/postgres");
require("dotenv/config");

// Bring in controllers
const dbController = require("../controllers/dbController");
const taskController = require("../controllers/taskController.js");
const authController = require("../controllers/authController.js");
const projectController = require("../controllers/projectController.js");

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
 * @route   POST /api/project
 * @desc    Create a new project
 * @access  Public (should be private)
 */
router.post(
  "/create-project",
  dbController.getUserFromUserIdCookie,
  authController.getAccessToken,
  projectController.getRepos,
  projectController.doesRepoExist,
  projectController.getRepoOwner,
  projectController.getCollaborators,
  async (req, res) => {
    try {
      // Temporary hardcoded user id -> waiting to test with the actual browser cookies
      // const userId = '14e33237-9cbb-43d3-9332-2e5641d712fb';
      const userId = req.cookies.userId;

      // Cannot use controller until cookies are accessible
      const user = res.locals.username;
      const projectName = req.body.repo;

      // Get collaborators
      const collaborators = res.locals.collaborators;

      const projectsQuery = `
        INSERT INTO projects (id, repo, project_owner)
        VALUES (uuid_generate_v4(), $1, $2)
        RETURNING *;`;

      const usersProjectsQuery = `
        INSERT INTO users_projects (id, user_id, project_id, isOwner)
        VALUES (uuid_generate_v4(), $1, $2, $3);`;

      const usersQuery = `
        INSERT INTO users (id, githandle)
        VALUES (uuid_generate, $1)
        ON CONFLICT (githandle) DO NOTHING;`;

      // Add new project to projects table
      const projectsResult = await db.query(projectsQuery, [
        projectName,
        userId,
      ]);
      const { id: projectId, repo } = projectsResult.rows[0];

      //
      await db.query(usersProjectsQuery, [userId, projectId, "t"]);

      // Add collaborators to users_projects table and users table
      for (let githandle of collaborators) {
        await db.query(usersProjectsQuery, [githandle]);
        await db.query(usersQuery, [githandle]);
      }

      res.json({
        message: `Successfully started project`,
        repo,
        user,
        collaborators,
      });
    } catch ({ message }) {
      res.status(400).json({
        log: "Something went wrong in POST /api/project route",
        message,
      });
    }
  }
);

/**
 * @route   POST /api/tasks/:project_id
 * @desc    Create a new task for a particular project
 * @access  Public (should be private)
 */
router.post("/tasks/:project_id", async (req, res) => {
  try {
    // Get project id
    const projectId = req.params.project_id;

    // Get dev that was assigned to task
    const { assignedDev, nick, description } = req.body;

    // (Probably can be handled with subqueries)
    const devQuery = `
      SELECT id FROM users
      WHERE githandle = $1;`;

    // Get the assigned dev's id
    const devResult = await db.query(devQuery, [assignedDev]);
    const devId = devResult.rows[0].id;

    const query = `
      INSERT INTO tasks (id, project_id, task_assignee, nick, description)
      VALUES (uuid_generate_v4(), $1, $2, $3, $4)
      RETURNING *;`;

    const result = await db.query(query, [projectId, devId, nick, description]);

    res.json({
      message: `${assignedDev} was assigned task ID ${result.rows[0].id}`,
      task: result.rows[0],
    });
  } catch ({ message: msg }) {
    return res.status(400).json({ msg });
  }
});

router.get(
  "/refresh",
  taskController.getCommits,
  taskController.parseCommits,
  (req, res) => {
    res.sendStatus(200);
  }
);

module.exports = router;

const router = require("express").Router();
const fetch = require("node-fetch");
const { Headers } = require("node-fetch");

const deserializeUser = require("../config/passport-setup.js");

const cookieParser = require("cookie-parser");

const projectController = {};

/**
 * @middleware  GET /api/projects/:id
 * @desc    Returns an array of projects associated with a particular user
 * @access  Public (should be private)
 */

const router = require('express').Router();
// const passport = require('passport');

import fetch, { Headers } from 'node-fetch';
// const fetch, { Headers } = require('node-fetch');

const authController = {};

authController.getAccessToken = (req, res, next) => {
    const { code } = res.locals;

    // fetch('https://github.com/login/oauth/authorize')

}


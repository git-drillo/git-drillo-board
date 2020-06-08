const router = require('express').Router();
// const passport = require('passport');

const fetch = require('node-fetch');
const { Headers } = require('node-fetch');
const deserializeUser = require('../config/passport-setup.js')

const authController = {};

authController.getAccessToken = (req, res, next) => {

    const { code } = res.locals;
    const { GITHUB_CLIENT_SECRET, GITHUB_CLIENT_ID } = process.env;

    const meta = {
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code: code
    }

    const myHeaders = new Headers(meta);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

}

      // fetch(`https://api.github.com/users/${profile.username}`, {
      //   method: 'get',
      //   params: { 'access_token': accessToken }
      // })
      // .then(res => res.json())
      // .then(data=>console.log(data))
      // .catch(err => console.log('ERROR: ', err))

authController.saveAccessToken = (req, res, next) => {
    console.log('INSIDE SAVE ACCESS TOKEN')
    const { user } = req;
    res.locals.accessToken = user;

    res.cookie('accessToken', user, {maxAge: 360000});
    console.log('ACCESS TOKEN', res.locals.accessToken)

    console.log('COOKIE: ', req.cookies)
    next();
}


module.exports = authController;

// POST https://github.com/login/oauth/access_token
const router = require('express').Router();
// const passport = require('passport');

const fetch = require('node-fetch');
const { Headers } = require('node-fetch');
const deserializeUser = require('../config/passport-setup.js');

const cookieParser = require('cookie-parser');

const authController = {};

// authController.getAccessToken = (req, res, next) => {
//   const { code } = res.locals;
//   const { GITHUB_CLIENT_SECRET, GITHUB_CLIENT_ID } = process.env;

//   const meta = {
//     client_id: GITHUB_CLIENT_ID,
//     client_secret: GITHUB_CLIENT_SECRET,
//     code: code,
//   };

//   const myHeaders = new Headers(meta);

//   const requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     redirect: 'follow',
//   };
// };

// fetch(`https://api.github.com/users/${profile.username}`, {
//   method: 'get',
//   params: { 'access_token': accessToken }
// })
// .then(res => res.json())
// .then(data=>console.log(data))
// .catch(err => console.log('ERROR: ', err))

authController.saveAccessToken = (req, res, next) => {
<<<<<<< HEAD
  const { token: accessToken } = req.user;
  res.locals.accessToken = accessToken;

  res.cookie('accessToken', accessToken, { maxAge: 360000 });
=======
  const { user } = req;

  // Purpose of locals storage?
  res.locals.accessToken = user.accessToken;
  res.locals.userId = user.userId;
>>>>>>> master

  res.cookie('accessToken', user.accessToken, { maxAge: 360000 });
  res.cookie('userId', user.userId, { maxAge: 360000 });
  // console.log('ACCESS TOKEN', res.locals.accessToken);

  // console.log('COOKIE: ', req.cookies);
  next();
};

module.exports = authController;

// POST https://github.com/login/oauth/access_token

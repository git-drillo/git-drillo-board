const router = require('express').Router();
// const passport = require('passport');

// import fetch, { Headers } from 'node-fetch';
// const fetch, { Headers } = require('node-fetch');

import axios from 'axios';

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
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };


    fetch('https://github.com/login/oauth/access_token', requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
        
}

// POST https://github.com/login/oauth/access_token
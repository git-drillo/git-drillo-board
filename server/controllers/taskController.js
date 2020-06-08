const router = require('express').Router();
// const passport = require('passport');

const fetch = require('node-fetch');
const { Headers } = require('node-fetch');

const cookieParser = require('cookie-parser');

const taskController = {};

taskController.getCommits = (req, res, next) => {
    console.log('inside taskController')
    aToken = res.locals.accessToken;
    const { user: username } = req.user;
    // https://api.github.com/repos/louisxsheid/git-drillo-board/commits
    //NEED TO IMPORT SPECIFIC REPO NAME
    let commits = [];
    fetch(`https://api.github.com/repos/${username}/git-drillo-board/commits`, {
    method: 'get',
    params: { 'access_token': aToken }
    })
    .then(res => res.json())
    .then(data=>{
        for(let i = 0; i < data.length; i++){
          commits.push(data[i].commit.message)
        } console.log(commits)
        next();
    })
    .catch(err => next(err))
    //then store commits into locals
}

// fetch(`https://api.github.com/users/${profile.username}`, {
//   method: 'get',
//   params: { 'access_token': accessToken }
// })
// .then(res => res.json())
// .then(data=>console.log(data))
// .catch(err => console.log('ERROR: ', err))
taskController.parseCommits = (req, res, next) => {
    //take list of commits from locals

    //go through list of commits and update 
    //database's tasks to ispending or not
    //based on the suffix of the commit message

//~syntax~
    //commit message: '[original msg]$${taskId}.pending'
}

taskController.insertTaskToDatabase = (req, res , next) => {
    //take task data from frontend and add to database
    //with respective commit messagse
}


module.exports = taskController;
const router = require('express').Router();
// const passport = require('passport');

const fetch = require('node-fetch');
const { Headers } = require('node-fetch');
const db = require('../db/postgres.js');
const cookieParser = require('cookie-parser');

const taskController = {};

taskController.getCommits = async (req, res, next) => {
  try{
    console.log('inside taskController getCommits')
    aToken = res.locals.accessToken;
    // const { user: username } = req.user;

    //frontend will send a post request /refresh with the repo name 
    //will be accessible in the req.body

    const { repo } = req.body;

    console.log('COOKIES:', req.cookies)
    const { userId } = req.cookies;
    res.locals.user_id = userId;
    const query = `SELECT githandle FROM users WHERE id='${userId}';`;

    await db.query(query)
    .then(data=>{
      const { githandle } = data.rows[0];
      let commits = [];
      let commitUrls = [];
      fetch(`https://api.github.com/repos/${githandle}/${repo}/commits`, {
      method: 'get',
      params: { 'access_token': aToken }
      })
      .then(res => res.json())
      .then(data=>{
        console.log(data.length)
          for(let i = 0; i < data.length; i++){
            commits.push(data[i].commit.message.replace(/'/g,''));
            commitUrls.push(data[i].commit.url);
          }console.log(commitUrls)
          res.locals.commitMessages = {
            commits,
            commitUrls,
          }
      next();
      })
      .catch(err => next(err))
    })
    .catch(err=> next(err))

  } catch (err) {
    console.log(err)
  }
}

taskController.parseCommits = async (req, res, next) => {
    //take list of commits from locals
    
      // const testCommits = 
      //       ["Merge branch redux-setup of into staging $$btn.pending",
      //       'Refactor component $$btn1.pending',
      //       'Add create project $$btn2.pending',
      //       'Apply redux and make functional component $$btn3.pending',
      //       'Reorganize types $$btn4.pending',]


    //~syntax~
    //commit message: '[original msg]$${taskId}.pending'

    //go through list of commits and update 
    //database's tasks to ispending or not
    //based on the suffix of the commit message
    try{ 
      console.log('INSIDE PARSECOMMITS')
      const { commits } = res.locals.commitMessages;
      const { commitUrls } = res.locals.commitMessages;
            
      let newCommits = [];
      for(let i = 0; i < commits.length; i++){
        if(commits[i].includes('$$')){
          newCommits.push(commits[i].substring(commits[i].indexOf("$$") + 2));

          let cmtMsg = commits[i].substring(0, commits[i].indexOf("$$")).trim();
          let nickName = newCommits[newCommits.length - 1].substring(0, newCommits[newCommits.length - 1].indexOf('.')).trim();

          const pendingQuery = `UPDATE tasks SET ispending='t', commit_msg='${cmtMsg}', commit_url='${commitUrls[i]}' WHERE nick='${nickName}'`
          await db.query(pendingQuery)
          .then(data=> console.log(data))
        }
      } next();
  } catch(err) {
    console.log('ERROR: ', err)
  }
}

taskController.insertTaskToDatabase = (req, res , next) => {
    //take task data from frontend and add to database
    //with respective commit messagse
}


module.exports = taskController;
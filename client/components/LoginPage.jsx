/**
 * @module  LoginPage
 * @author Louis Xavier Sheid III
 * @date  Sun, Jun 7, 2020
 * @description github login page initilizing oAuth
 */

import React from 'react';

const LoginPage = props => (
  <div id="LoginPage">
      <div id="imgWrap">
      <a href='/auth/github'>
        <img src='./assets/githublogo.png' className='gitLogo'></img>
      </a>
      </div>
  </div>
);

export default LoginPage;



// const loginState = {
//   loginRedirect: function () { /* go to landing page AFTER github auth redirect */ },
// }

// const landingPageState  = {
//   userId: String, /* this should be the log in cookie code gathered from oauth */
//   owner: String, /* name of the person from the oauth cookie */

//   projects = [
//     {
//       projectName: '',
//       project_id: '',
//       userIsOwner: true,
//     }
//   ],

//   onMount: function() { /* fetch request to gather all the information in db that matches the userId */ },

//   createNewProjectBoard: function() { /* create funcitonality */},
//   redirectToProject: function(projectId) { /* go to boardPage displaying every category and task in  */},

//   // render ( /* render all project. render those that are owned differently */),
// }

// const boardPageState = {
//   userId: {
//     repoUrl: '',
//     owner_id: '',
//     toDo: [],
//     inProgress: [],
//   },
//   userId: {
//     repoUrl: '',
//     owner_id: '',
//     toDo: [],
//     inProgress: [],
//   },

//   createNewTask: function() {},
// }


// // toDo = [
// //   { task: 'Create login button',
// //     tag: 'frontend',
// //     assignedDev: 'none',
// //     userId: 'string',
// //     commitMessage: '',
// //     commitUrl: '',
// //   },
// // ]
// // inProgress = [
// //   { task: 'Create login button', tag: 'frontend', assignedDev: 'none' },
// //   { task: 'create basic project page', tag: 'frontend', assignedDev: 'none' },
// //   { task: 'set up button to make new project', tag: 'fullstack', assignedDev: 'none' },
// //   { task: 'set up button to make new project', tag: 'fullstack', assignedDev: 'none' },
// // ]
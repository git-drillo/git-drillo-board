/**
 * @module  App.jsx
 * @author Katty Polyak and
 * @date Sat, Jun 6, 2020
 * @description main rendering component
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './git-drillo.css';

import ProjectPageContainer from './containers/ProjectPageContainer.jsx';
// import LandingPageContainer from './containers/LandingPageContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <main>
          {/* <Switch> */}
          {/* <Route
              exact
              path='/board'
              component={() => <LogInPage />}
            /> */}
          <Route exact path='/dashboard' component={() => <LandingPageContainer />} />
          <Route exact path='/projectBoard' component={() => <ProjectPageContainer />} />
          {/* </Switch> */}
        </main>
      </div>
    );
  }
}

export default App;


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
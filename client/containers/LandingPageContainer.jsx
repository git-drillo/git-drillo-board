/**
 * @module  LandingPageContainer
 * @author Katty Polyak
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders a Landing Page component
 */

import React, { Component } from 'react';
import LandingPage from '../components/LandingPage.jsx';
import Header from '../components/Header.jsx';

const mapStateToProps = state => ({
  // provide state key/value pairs for landing page container components
});

const mapDispatchToProps = dispatch => ({
  // link in functions from actions.js
});

class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="LandingContainer">
        <Header />
        <LandingPage />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);



const loginState = {
  loginRedirect: function () { /* go to landing page AFTER github auth redirect */ },
}

const landingPageState  = {
  userId: String, /* this should be the log in cookie code gathered from oauth */
  owner: String, /* name of the person from the oauth cookie */

  projects = [
    {
      projectName: '',
      project_id: '',
      userIsOwner: true,
    }
  ],

  onMount: function() { /* fetch request to gather all the information in db that matches the userId.  the token will be sent in the header */ },

  createNewProjectBoard: function() { /* create funcitonality */},
  redirectToProject: function(projectId) { /* go to boardPage displaying every category and task in  */},

  // render ( /* render all project. render those that are owned differently */),
}

const boardPageState = {
  userId: {
    repoUrl: '',
    owner_id: '',
    toDo: [],
    inProgress: [],
  },
  userId: {
    repoUrl: '',
    owner_id: '',
    toDo: [],
    inProgress: [],
  },

  createNewTask: function() {},
}


let toDo = [
  { task: 'Create login button',
    tag: 'frontend',
    assignedDev: 'none',
    userId: 'string',
    commitMessage: '',
    commitUrl: '',
  },
]
let inProgress = [
  { task: 'Create login button', tag: 'frontend', assignedDev: 'none' },
  { task: 'create basic project page', tag: 'frontend', assignedDev: 'none' },
  { task: 'set up button to make new project', tag: 'fullstack', assignedDev: 'none' },
  { task: 'set up button to make new project', tag: 'fullstack', assignedDev: 'none' },
]
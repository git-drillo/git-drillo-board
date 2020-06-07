/**
 * @module  LandingPage
 * @author Katty Polyak and
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders...
*/

import React from 'react';

import Project from './Project.jsx';
// Landing Page displays our button to add a new project and boxes which link to a user's existing repositories
// LandingPage.jsx

function LandingPage(props) {
  const renderedProjects = [];
  for (let i = 0; i < props.projectsArray.length; i++) {
    let project = props.projectsArray[i];
    renderedProjects.push(
      <Project
        key={i} projectInformation={project}
      />
    );
  }


  return (
    <div className="landingContainer">
      <div className="createProject">
        +
      </div>
      {renderedProjects}
    </div>
  )
}

export default LandingPage;
// drop down button
// links to modal with drop down for repository drop down

// button creates a new project board container

// contains projects
// links to individual board page

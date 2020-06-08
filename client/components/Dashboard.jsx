/**
 * @module  DashboardPage
 * @author Katty Polyak and
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders...
 */

import React from 'react';

import Project from './Project.jsx';
import NewProjectPopUp from './NewProjectPopUp.jsx';
// Dashboard Page displays our button to add a new project and boxes which link to a user's existing repositories

function DashboardPage(props) {
const { projects, /*createProject*/ createNewProject, createNewProjectToggle } = props;

  return (
    <div className="landingContainer">
      <div className="createProject" onClick={createNewProject}>
        +
      </div>
      {createNewProjectToggle ?
        <NewProjectPopUp
         closePopUp={props.createNewProject} /> : null}
      {projects.map(project => (
        <Project key={project.id} projectInformation={project} />
      ))}
    </div>
  );
}

export default DashboardPage;
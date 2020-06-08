/**
 * @module  Project
 * @author Jonathan
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders each project info
*/

import React from 'react';
import { Link } from 'react-router-dom';

function Project (props) {
  const {id, repo, isOwner } = props.projectInformation
  console.log(props.projectInformation, 'project information')
  let projectStyling = {};
  if (isOwner) {
    projectStyling = { border: 'thin solid red' }
  } else {
    projectStyling = { border: 'thin solid black' }
  }

  return(
    <div className="individualProject" style={projectStyling} project={id}>
      <Link to={`project-board/${repo}`}> {repo} </Link>
    </div>
  );
}

export default Project;
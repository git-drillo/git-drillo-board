/**
 * @module  Project
 * @author Jonathan
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders each project info
*/

import React from 'react';

function Project (props) {
  let projectStyling = {};
  if (props.projectInformation.projectOwn) {
    projectStyling = { border: 'thin solid red' }
  } else {
    projectStyling = { border: 'thin solid black' }
  }

  return(
    <div className="individualProject" style={projectStyling}>
      <p> {props.projectInformation.projectName} </p>
    </div>
  );
}

export default Project;
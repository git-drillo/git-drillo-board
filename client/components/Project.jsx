/**
 * @module  Project
 * @author Jonathan
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders each project info
*/

import React from 'react';

function Project (props) {
  const {id, title, isOwner } = props.projectInformation
  let projectStyling = {};
  if (isOwner) {
    projectStyling = { border: 'thin solid red' }
  } else {
    projectStyling = { border: 'thin solid black' }
  }

  return(
    <div className="individualProject" style={projectStyling} project={id}>
      <p> {title} </p>
    </div>
  );
}

export default Project;
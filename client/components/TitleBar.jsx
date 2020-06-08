TitleBar
/**
 * @module  TitleBar
 * @author  Jonathan 
 * @date Sun, Jun 7, 2020
 * @description presentation component that renders User's project name and a return to Dashboard link
*/

import React from 'react';
import { Link } from 'react-router-dom';

// render the Header with link back to LandingPageContainer
const TitleBar = props => (
  <div className="projectTitleBar">
    <h3> {props.projectName} </h3>
    <Link to="/dashboard">Back to Dashboard</Link>
  </div>
);

export default TitleBar;

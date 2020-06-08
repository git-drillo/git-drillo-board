TitleBar
/**
 * @module  TitleBar
 * @author  Jonathan 
 * @date Sun, Jun 7, 2020
 * @description presentation component that renders User's project name and a return to Dashboard link
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

// render the Header with link back to LandingPageContainer
function TitleBar (props) {
    return (
      <div className="projectTitleBar">
        <h3> {props.header} </h3>
        <div>
          <Link to={props.redirectRoute}> {props.redirectMessage} </Link>
          <button onClick={props.refresh}>Refresh</button>
        </div>
      </div>
    );
}

export default TitleBar;

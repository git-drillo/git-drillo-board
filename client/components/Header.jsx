/**
 * @module  Header
 * @author Katty Polyak and
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders our header title
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
  <div className="Header">
    {/* <h1> Git-Drillo </h1> */}
    <div id='OUTERCONTAINER'>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img id='logogo' src='./assets/pinkfairyarmadillo.png'></img>
        </Link>
        <p id='gitdrillo'>Git Drillo: Simplify Your Github and SCRUM Workflow</p>
    </div>
    {/* <button onClick={props.returnToProjectsBoard}> Return to Projects Board </button> */}
  </div>
);

export default Header;

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
    <Link to="/" style={{ textDecoration: 'none' }}>Git-Drillo</Link>
    {/* <button onClick={props.returnToProjectsBoard}> Return to Projects Board </button> */}
  </div>
);

export default Header;

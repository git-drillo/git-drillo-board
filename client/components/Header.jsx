/**
 * @module  Header
 * @author Katty Polyak and
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders our header title
 */

import React from 'react';

const Header = props => (
  <div className="Header">
    <h1> {props.header.title} </h1>
    <button onClick={props.dummyClick}> click me </button>
  </div>
);

export default Header;

/**
 * @module  LandingPage
 * @author Katty Polyak and 
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders...
*/

import React, { Component } from "react";

// Landing Page displays our button to add a new project and boxes which link to a user's existing repositories
// LandingPage.jsx

class LandingPage extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div id="LandingPage">
                <button>+</button>

            </div>
        )

    }
}

    // drop down button
      // links to modal with drop down for repository drop down

    // button creates a new project board container

    // contains projects
      // links to individual board page
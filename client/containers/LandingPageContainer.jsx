/**
 * @module  LandingPageContainer
 * @author Katty Polyak
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders a Landing Page component
 */

import React, { Component } from 'react';
import LandingPage from '../components/LandingPage.jsx';
import Header from '../components/Header.jsx';

const mapStateToProps = state => ({
  // provide state key/value pairs for landing page container components
});

const mapDispatchToProps = dispatch => ({
  // link in functions from actions.js
});

class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="LandingContainer">
        <Header />
        <LandingPage />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);

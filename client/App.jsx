/**
 * @module  App.jsx
 * @author Katty Polyak and
 * @date Sat, Jun 6, 2020
 * @description main rendering component
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import ProjectPageContainer from './containers/ProjectPageContainer.jsx';
import LandingPageContainer from './containers/LandingPageContainer.jsx';
import LoginPage from './components/LoginPage.jsx';
import Header from './components/Header.jsx'



class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <main>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <LoginPage />} />
            {/* Working on landing page container still */}
            <Route exact path="/dashboard" component={() => <LandingPageContainer />} />
            {/* <Route exact path="/dashboard" component={() => <h1>Logged in</h1>} /> */}
            <Route exact path="/projectBoard" component={() => <ProjectPageContainer />} />
          </Switch>
        </main>
      </div >
    );
  }
}

export default App;

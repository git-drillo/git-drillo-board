/**
 * @module  App.jsx
 * @author Katty Polyak and
 * @date Sat, Jun 6, 2020
 * @description main rendering component
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './git-drillo.css';

import BoardPageContainer from './containers/BoardPageContainer.jsx';
// import LandingPageContainer from './containers/LandingPageContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <main>
          {/* <Switch> */}
          {/* <Route
              exact
              path='/'
              component={() => <LogInPage />}
            /> */}
          {/* <Route
              exact
              path='/dashboard'
              component={() => <LandingPageContainer />}
            /> */}
          <Route exact path="/" component={() => <BoardPageContainer />} />
          {/* </Switch> */}
        </main>
      </div>
    );
  }
}

export default App;

// app
// Header.jsx

///// if just sign in display landing page /////

///// if project then display board container /////

// BoardPage.jsx
// params pending, to do, done
// Categories.jsx

// params tasks
// Tasks.jsx

// <BoardPageContainer>
//     <Category id="toDo" />
//     <Category id="inProgress" />
//     <Category id="inProgress" />
// </BoardPageContainer>

// class Category {
//  for () {

//  }
//         <Task
//           name = jose
//           person =
//           id =
//         />
//       render array

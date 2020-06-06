/**
 * @module  App.jsx
 * @author Katty Polyak and
 * @date Sat, Jun 6, 2020
 * @description main rendering component
*/

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import BoardPageContainer from './containers/BoardPageContainer';
import LandingPageContainer from './containers/LandingPageContainer';
// import Header from './components/Header';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <Switch>
          <Route
            exact
            path = '/'
            component = { () => <LandingPageContainer /> }
          />
          <Route
            exact
            path = '/project/:id'
            component = { () => <BoardPageContainer /> }
          />
        </Switch>
      </div>
    )
  }
}


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

/**
 * @module  BoardPageContainer
 * @author  Jonathan and Katty Polyak
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders 3 Category components
 */

import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Category from '../components/Category.jsx';

const mapStateToProps = state => {
  // provide pertinent state here
};

const mapDispatchToProps = dispatch => {
  // create functions that will dispatch action creators
};

class BoardPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        title: 'Git Drillo Board',
      },
      toDo: [
        { task: 'Create login button', tag: 'frontend', assignedDev: 'none' },
        { task: 'create basic project page', tag: 'frontend', assignedDev: 'none' },
        { task: 'set up button to make new project', tag: 'fullstack', assignedDev: 'none' },
      ],
      inProgress: [
        { task: 'Create login button', tag: 'frontend', assignedDev: 'none' },
        { task: 'create basic project page', tag: 'frontend', assignedDev: 'none' },
        { task: 'set up button to make new project', tag: 'fullstack', assignedDev: 'none' },
      ],
      pending: [{ task: 'set up sql pool', tag: 'backend', assignedDev: 'louis' }],
      done: [
        { task: 'set up backend dependencies', tag: 'backend', assignedDev: 'jonathan' },
        { task: 'set up database tables', tag: 'backend', assignedDev: 'louis' },
        { task: 'set up button to make new project', tag: 'fullstack', assignedDev: 'none' },
      ],
    };
  }

  dummyClick = () => {
    console.log('dummy click test');
  };

  render() {
    return (
      <div>
        <Header header={this.state.header} dummyClick={this.dummyClick} />
        <div className="BoardPageContainer">
          {/* <Category
            categoryName='To Do'
            dummyClick={this.dummyClick}
            array={this.state.toDo}
          /> */}
          <Category
            categoryName="In Progress"
            dummyClick={this.dummyClick}
            array={this.state.inProgress}
          />
          <Category categoryName="Done" dummyClick={this.dummyClick} array={this.state.done} />
          {/* <Category
            categoryName='Pending'
            dummyClick={this.dummyClick}
            array={this.state.pending}
          /> */}
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(BoardPageContainer);

export default BoardPageContainer;

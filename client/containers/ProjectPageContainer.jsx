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
      inProgress: [
        {
          task: 'Create login button',
          tag: 'frontend',
          assignedDev: 'none',
          userId: '7bc',
          commitMessage: 'done with button creation',
          commitUrl: 'http://github/foo/bar',
          pending: false,
        },
      ],
      done: [
        {
          task: 'Create login button',
          tag: 'frontend',
          assignedDev: 'none',
          userId: '7bc',
          commitMessage: 'done with button creation',
          commitUrl: 'http://github/foo/bar',
          pending: true,
        },
        {
          task: 'Create login button',
          tag: 'frontend',
          assignedDev: 'none',
          userId: '7bc',
          commitMessage: 'done with button creation',
          commitUrl: 'http://github/foo/bar',
          pending: false,
        },
        {
          task: 'Create login button',
          tag: 'frontend',
          assignedDev: 'none',
          userId: '7bc',
          commitMessage: 'done with button creation',
          commitUrl: 'http://github/foo/bar',
          pending: true,
        },
      ],
    };
  }

  createNewTask = () => {
    console.log('new task created functionality has been invoked');
  };

  taskButtonEdit = () => {
    console.log('edit task button functionality has been invoked');
  };

  returnToProjectsBoard = () => {
    console.log('return to Projects Page functionality has been invoked');
  };

  render() {
    return (
      <div>
        <Header header={this.state.header} returnToProjectsBoard={this.returnToProjectsBoard} />
        <div className="BoardPageContainer">
          <Category
            categoryName="In Progress"
            createNewTask={this.createNewTask}
            taskButtonEdit={this.taskButtonEdit}
            array={this.state.inProgress}
          />
          <Category
            categoryName="Done"
            createNewTask={this.createNewTask}
            taskButtonEdit={this.taskButtonEdit}
            array={this.state.done}
          />
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(BoardPageContainer);

export default BoardPageContainer;

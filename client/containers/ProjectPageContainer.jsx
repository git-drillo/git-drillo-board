/**
 * @module  BoardPageContainer
 * @author  Jonathan and Katty Polyak
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders 3 Category components
 */

import React from 'react';
import { connect } from 'react-redux';
import * as projectActionCreators from '../actions/projectActions';
import { bindActionCreators } from 'redux';
import Category from '../components/Category.jsx';
import TitleBar from '../components/TitleBar.jsx';

class ProjectPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: 'the ultimate foobar project',
      newTaskPopUp: false,
    }
  }

  createNewTask = () => {
    this.setState({
      newTaskPopUp: !this.state.newTaskPopUp
    });
  }

  updateTaskToApproved = () => {
    console.log('task now marked as approved and moved to done');
  }

  refresh = () => {
    console.log('"refresh"');
  }

  render() {
    const { done, inProgress, createTask, deleteTask, editTask, NewTaskPopUpToggle } = this.props;
    return (

      <div>
        <TitleBar header={this.state.projectName} refresh={this.refresh} redirectRoute="/dashboard" redirectMessage="Back to Dashboard" />

        <div className="BoardPageContainer">
          <Category
            popUpToggle = {this.state.newTaskPopUp}
            createNewTask = {this.createNewTask}
            categoryName="In Progress"
            createTask={createTask}
            editTask={editTask}
            array={inProgress}
            approve={this.updateTaskToApproved}
          />
          <Category
            popUpToggle = {this.state.newTaskPopUp}
            createNewTask = {this.createNewTask}
            categoryName="Done"
            createTask={createTask}
            editTask={editTask}
            array={done}
          />
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    done: state.project.done,
    inProgress: state.project.inProgress,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(projectActionCreators, dispatch);

// const mapDispatchToProps = dispatch => {
//   return {
//     createTask: () => dispatch(createTask()),
//     deleteTask: () => dispatch(deleteTask()),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPageContainer);

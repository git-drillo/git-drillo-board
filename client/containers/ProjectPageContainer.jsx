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

function ProjectPageContainer(props) {
  const { done, inProgress, createTask, deleteTask, editTask, NewTaskPopUpToggle } = props;
  constructor
  let NewTaskPopUpToggle = true;
  const newTaskFormPopUp = () => {

  }
  return (
    <div>
      <TitleBar />
      <div className="BoardPageContainer">
        <Category
          NewTaskPopUpToggle={NewTaskPopUpToggle}
          categoryName="In Progress"
          createTask={createTask}
          editTask={editTask}
          array={inProgress}
        />
        <Category
          NewTaskPopUpToggle={NewTaskPopUpToggle}
          categoryName="Done"
          createTask={createTask}
          editTask={editTask}
          array={done}
        />
      </div>
    </div>
  );
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

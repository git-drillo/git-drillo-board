/**
 * @module  Task
 * @author
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders a single box for each task
 */

import React from 'react';

// on expand
// task id
//

function Task (props) {
  let taskStyling = {};
  if (props.taskInformation.pending) {
    taskStyling = { border: 'thin solid red' }
  } else {
    taskStyling = { border: 'thin solid black' }
  }

  return(
    <div className="individualTask" style={taskStyling}>
      <p> Task: {props.taskInformation.task} </p>
      <p> Tag: {props.taskInformation.tag} </p>
      <p> AssignedDev: {props.taskInformation.assignedDev} </p>
      <p> Commit: {props.taskInformation.commitMessage} </p>
      <p> CommitUrl: {props.taskInformation.commitUrl} </p>
      <button onClick={props.taskButtonEdit}> edit </button>
    </div>
  );
}

export default Task;

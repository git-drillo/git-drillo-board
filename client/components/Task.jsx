/**
 * @module  Task
 * @author
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders a single box for each task
 */

import React from 'react';

function Task(props) {
  let taskStyling = {};
  if (props.taskInformation.pending) {
    taskStyling = { border: ' solid lightblue' };
  } else {
    taskStyling = {};
  }

  const { editTask, taskInformation, approve } = props;
  const { task, tag, assignedDev, commitMsg, commitUrl } = taskInformation;
  return (
    <div className="individualTask" style={taskStyling}>
      <p> Task: {task} </p>
      <p> Tag: {tag} </p>
      <p> AssignedDev: {assignedDev} </p>
      <p> Commit: {commitMsg} </p>
      <p> CommitUrl: {commitUrl} </p>
      <button onClick={editTask}> Edit </button>
      {props.taskInformation.pending ? <button onClick={approve}> Approve </button> : null}
  
    </div>
  );
}

export default Task;

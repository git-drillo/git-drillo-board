/**
 * @module  Task
 * @author
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders a single box for each task
*/

import React from 'react';

// render the Name of the task with any tags if there are any
// render the person who is assigned to the task

// on expand
  // task id
  // 

const Task = (props) => (
  <div className="individualTask">
    <p> Task: {props.taskName} </p>
    <p> Tag: {props.tag} </p>
    <p> AssignedDev: {props.AssignedDev} </p>
  </div>
)

export default Task;

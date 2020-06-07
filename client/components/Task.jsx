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

const Task = props => (
  <div className="individualTask" style={taskStyle}>
    <p> Task: {props.taskInformation.task} </p>
    <p> Tag: {props.taskInformation.tag} </p>
    <p> AssignedDev: {props.taskInformation.assignedDev} </p>
  </div>
);

const taskStyle = {
  border: 'thin solid black',
};

export default Task;

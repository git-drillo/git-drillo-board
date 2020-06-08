/**
 * @module  Category.jsx
 * @author
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders n Task components
 */

import React from 'react';
import Task from './Task.jsx';
import NewTaskPopUp from './NewTaskPopUp.jsx'

function Category(props) {
  const { categoryName, createTask, array, editTask, popUpToggle, createNewTask } = props;
  const renderedTasksArray = [];
  for (let i = 0; i < array.length; i++) {
    let task = array[i];
    renderedTasksArray.push(<Task key={i} taskInformation={task} editTask={editTask} />);
  }
  return (
    <div className="categories">
      <h4>{categoryName}</h4>
      {renderedTasksArray}
      <button onClick={createNewTask}> + Add another card </button>
      {props.popUpToggle ?
         <NewTaskPopUp
          closePopUp={props.createNewTask} /> : null}
    </div>
  );
}

export default Category;

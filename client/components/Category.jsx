/**
 * @module  Category.jsx
 * @author
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders n Task components
 */

import React from 'react';
import Task from './Task.jsx';

function Category(props) {
  const { categoryName, createTask, array, editTask } = props;
  const renderedTasksArray = [];
  for (let i = 0; i < array.length; i++) {
    let task = array[i];
    renderedTasksArray.push(<Task key={i} taskInformation={task} editTask={editTask} />);
  }
  return (
    <div className="categories">
      <h4>{categoryName}</h4>
      {renderedTasksArray}
      <button onClick={createTask}> + Add another card </button>
    </div>
  );
}

export default Category;

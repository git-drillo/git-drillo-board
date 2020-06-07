/**
 * @module  Category.jsx
 * @author
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders n Task components
 */

import React from 'react';
import Task from './Task.jsx';

function Category(props) {
  const renderedTasksArray = [];
  for (let i = 0; i < props.array.length; i++) {
    let task = props.array[i];
    renderedTasksArray.push(<Task key={i} taskInformation={task} taskButtonEdit={props.taskButtonEdit}/>);
  }
  return (
    <div className="categories">
      <h4>{props.categoryName}</h4>
      {renderedTasksArray}
      <button onClick={props.createNewTask}> + Add another card </button>
    </div>
  );
}

export default Category;

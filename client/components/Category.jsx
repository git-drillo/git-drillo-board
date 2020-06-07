/**
 * @module  Category.jsx
 * @author
 * @date  Sat, Jun 6, 2020
 * @description presentation component that renders n Task components
*/

import React from 'react';

function Category(props) {
  const tasksArray = props.array;
  for (let i = 0; i < 5; i++){
    tasksArray.push(
      <div>
  
      </div>
    )
  
    return (
      <div>
        { tasksArray }
      </div>
    )
  }
}



export default Category;
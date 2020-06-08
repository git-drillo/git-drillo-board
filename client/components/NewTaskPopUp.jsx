import React from 'react';

const NewTaskPopUp = (props) =>  (
  <div className='popup'>
    <div className='popup_inner'>
      <h3>New Task...</h3>
      <form>
        <label>
          Task Description:
          <input type="text" name="name" />
        </label> 
        <label>
          NickName:
          <input type="text" name="name" />
        </label>
        <label>
          Assigned:
          {/* <input type="text" name="name" /> */}
        <select>
          <option value="82sdf68">Ronelle</option>
          <option value="fd687dsf">Katty</option>
          <option selected value="567dsfd">Louis</option>
          <option value="s58sdfs">Jonathan</option>
        </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={props.closePopUp}>x</button>
    </div>
  </div>
)


export default NewTaskPopUp

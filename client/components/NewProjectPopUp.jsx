import React from 'react';

const NewProjectPopUp = (props) =>  (
  <div className='popup'>
    <div className='popup_inner'>
      <h3>New Project...</h3>
      <form>
        <label>
          Repo:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={props.closePopUp}>x</button>
    </div>
  </div>
)


export default NewProjectPopUp

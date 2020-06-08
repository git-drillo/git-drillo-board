import React from 'react';

const NewTaskPopUp = (props) =>  (
  <div className='popup'>
    <div className='popup_inner'>
      {/* <h1>{props.text}</h1> */}
    <button onClick={props.closePopup}>x</button>
    </div>
  </div>
)


export default NewTaskPopUp
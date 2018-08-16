import React from 'react';

const AddTodo = ({ onClick }) => {
  return (
    <div className="input-container">
      <input type='text' id='user-input'/>
      <button onClick={onClick}>Add Todo</button>
    </div>  
  )
}

export default AddTodo;
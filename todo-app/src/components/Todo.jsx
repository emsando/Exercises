import React from 'react';

const Todo = ({ item, toggleTodo }) => {
  return (
    <div 
    className={item.completed ? 'todo-item completed' : 'todo-item'}
    onClick={toggleTodo}
    >{item.task}</div>
  )
}

export default Todo;
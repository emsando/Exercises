import React from 'react';
import Todo from './Todo.js'

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {
        todos.map(todo => {
         return <Todo
            key={todo.id}
            text={todo.text} 
            completed={todo.completed} 
            onClick={() => toggleTodo(todo.id)}
          />
        })
      }
    </ul>
  )
}

export default TodoList;
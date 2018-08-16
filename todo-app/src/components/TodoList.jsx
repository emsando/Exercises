import React from 'react'; 
import Todo from './Todo.jsx';

const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo, index) => <Todo item={todo} toggleTodo={toggleTodo} key={index}/>)
}

export default TodoList;
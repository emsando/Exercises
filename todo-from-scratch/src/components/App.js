import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList.js';
import AddTodo from '../containers/AddTodo.js'

const App = () => {
  return (
    <div>Hello world
      <AddTodo />
      <VisibleTodoList />
    </div>
  )
}

export default App;
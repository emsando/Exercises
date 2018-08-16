import React, { Component } from 'react';

import { todos } from '../../dummyData.js';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    }

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteCompleted = this.deleteCompleted.bind(this);
  }

  addTodo() {
    const input = document.getElementById('user-input').value;
    document.getElementById('user-input').value = '';

    this.setState({
      todos: this.state.todos.concat([ {task: input, completed: false} ])
    });
  }

  toggleTodo(e) {
    const task = e.target.innerHTML;
    const todos = this.state.todos; 
    todos.forEach(todo => {
      if (todo.task === task) {
        todo.completed = !todo.completed;
      }
    })

    this.setState({ todos });
  }

  deleteCompleted() {
    const todos = [];
    this.state.todos.forEach(todo => todo.completed ? null : todos.push(todo));
    this.setState({ todos });
  }

  render() {
    return (
      <div className="main-container">
        <div>My Todo List!</div>
        <div className="top-layer">
          <AddTodo onClick={this.addTodo}/>
          <button className="delete-button" onClick={this.deleteCompleted}>Remove Completed Todos</button> 
        </div>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}/>
      </div>
    );
  }
}

export default App;
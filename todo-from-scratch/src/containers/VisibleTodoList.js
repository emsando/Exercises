import { connect } from 'react-redux';
import TodoList from '../components/TodoList.js';
import { filters, toggleTodoActionCreator } from '../actions/index.js'

const filterTodos = (todos, filter) => {
  if (filter === filters.SHOW_ALL) {
    return todos;
  }
  if (filter === filters.SHOW_COMPLETED) {
    return todos.filter(item => item.completed);
  }
  if (filter === filters.SHOW_ACTIVE) {
    return todos.filter(item => !item.completed);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: function(id) {
      dispatch(toggleTodoActionCreator(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
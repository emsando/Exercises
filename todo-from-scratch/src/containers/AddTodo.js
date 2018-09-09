import React from 'react';
import { connect } from 'react-redux';
import { addTodoActionCreator } from '../actions/index.js'

const AddTodo = ({ dispatch }) => {
  let input = null;

  return (
    <div id="add-todo">
      <input type="text" ref={(node) => input = node}></input>
      <button
        onClick={
          () => {
            let text = input.value;
            if (!text) return;

            input.value = '';
            dispatch(addTodoActionCreator(text));
          }
        }
      >
        Add Todo
      </button>
    </div>
  )
}

export default connect()(AddTodo);
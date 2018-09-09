import { combineReducers } from 'redux';
import todos from './todos.js'
import filter from './filter.js'


export default combineReducers({ todos, filter });
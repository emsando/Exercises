import { filters } from '../actions/index.js';

const filter = (filterState = filters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_FILTER': 
      return action.filter;
    default:
      return filterState;
  }
}

export default filter;
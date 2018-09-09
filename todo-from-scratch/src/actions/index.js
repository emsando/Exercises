export const filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const toggleTodoActionCreator = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

let nextId = 0;
export const addTodoActionCreator = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    id: nextId++
  }
}
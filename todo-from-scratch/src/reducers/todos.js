const todos = (todoState = [], action) => {
  if (action.type === 'TOGGLE_TODO') {
    return todoState.map(todo => {
      return todo.id === action.id ? Object.assign({}, todo, {completed: !todo.completed}) : todo;
    })
  }

  if (action.type === 'ADD_TODO') {
    return [
      ...todoState,
      {
        text: action.text,
        id: action.id,
        completed: false
      }
    ]
  }

  return todoState;
}

export default todos;
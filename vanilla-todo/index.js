const addTodoButton = document.getElementById('add-todo');
const userText = document.getElementById('user-text');
const todoList = document.getElementById('todo-list'); 

const todos = [];

const Todo = function(text) {
  this.text = text;
  this.completed = false;
}

addTodoButton.addEventListener('click', () => {
  let todo = new Todo(userText.value);
  todos.push(todo);
  updateList();
})

const updateList = () => {
  todoList.innerHTML = '';
  todos.map((todo, index) => {
    let item = document.createElement('li')
    item.className = 'list-item'
    item.id = index;
    item.innerHTML = todo.text;
    todoList.appendChild(item);
  })
}

todoList.addEventListener('click', (e) => {
  if (e.target.tagName !== 'LI') return
  let className = e.target.className;
  if (className === 'list-item') {
    e.target.className = 'list-item completed'
  } else {
    e.target.className = 'list-item';
  }
})
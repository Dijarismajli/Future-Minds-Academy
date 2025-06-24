const validEmail = "info@futureminds.io";
  const validPassword = "Fma#2025";

  const todos = [];
  let currentFilter = 'all';
  let editingIndex = null;

  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === validEmail && password === validPassword) {
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('app-screen').style.display = 'block';
    } else {
      alert('Invalid credentials');
    }
  }

  function addTodo() {
    const task = document.getElementById('new-task').value;
    const date = document.getElementById('date-select').value;
    if (task.trim()) {
      todos.push({ text: task, date, completed: false });
      document.getElementById('new-task').value = '';
      renderTodos();
    }
  }

  function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
  }

  function editTodo(index) {
    editingIndex = index;
    document.getElementById('edit-text').value = todos[index].text;
    document.getElementById('edit-modal').style.display = 'flex';
  }

  function saveEdit() {
    const newText = document.getElementById('edit-text').value;
    if (editingIndex !== null && newText.trim()) {
      todos[editingIndex].text = newText;
      editingIndex = null;
      document.getElementById('edit-modal').style.display = 'none';
      renderTodos();
    }
  }

  function filterTodos(filter) {
    currentFilter = filter;
    renderTodos();
  }

  function renderTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach((todo, index) => {
      if (currentFilter !== 'all' && todo.date !== currentFilter) return;

      const li = document.createElement('li');
      li.className = todo.completed ? 'completed' : '';

      const span = document.createElement('span');
      span.textContent = todo.text;
      span.onclick = () => toggleComplete(index);
      li.appendChild(span);

      const actions = document.createElement('div');
      actions.className = 'actions';

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.onclick = () => editTodo(index);
      actions.appendChild(editBtn);

      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.onclick = () => deleteTodo(index);
      actions.appendChild(delBtn);

      li.appendChild(actions);
      list.appendChild(li);
    });
  }
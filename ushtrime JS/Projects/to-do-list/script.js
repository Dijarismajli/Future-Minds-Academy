const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task
function createTask(taskText) {

    const li = document.createElement('li');

    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(removeBtn);

    taskList.appendChild(li);
}


addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); // Get the input value and remove whitespace

    if (taskText !== '') {
        createTask(taskText);
        taskInput.value = '';
    } else {
        alert('Please enter a task');
    }
});

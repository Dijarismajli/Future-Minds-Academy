const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task
function createTask(taskText) {
    // Create list item (li)
    const li = document.createElement('li');

    // Create text node for the task and append it to the list item
    li.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    // Add event listener to the remove button to delete the task
    removeBtn.addEventListener('click', () => {
        li.remove();
    });

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(li);
}

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); // Get the input value and remove whitespace

    // Only add the task if the input is not empty
    if (taskText !== '') {
        createTask(taskText);
        taskInput.value = ''; // Clear the input field after adding the task
    } else {
        alert('Please enter a task');
    }
});

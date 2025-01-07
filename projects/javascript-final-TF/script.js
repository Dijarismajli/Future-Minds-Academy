let AllBtn = []


const taskInput = document.querySelector("#taskInput")
const taskList = document.querySelector("#taskList")

let Line = false;

function addItem() {
    AllBtn.push(taskInput.value);
    render()
}

function render() {

    taskList.innerHTML = '';
    for (let i = 0; i < AllBtn.length; i++) {
        taskList.innerHTML += `
           <li>
            <span class="" onclick="Change(${i})">${AllBtn[i]}</span>
            <button class="edit" onclick="editBtn(${i})">Edit</button>
            <button onclick="deleteBtn(${i})">Delete</button>
            </li>
            `;
    }
}

function editBtn(i) {
    let newTask = prompt('Edit your task:', AllBtn[i]);
    if (newTask === '') {
        alert('Task cannot be empty.');
    } else if (newTask !== null) {
        AllBtn[i] = newTask;
        render();
    }

}

function deleteBtn(i) {
    AllBtn.splice(i, 1);
    render();
}

function Change(i) {
    AllBtn[i] = `<s>${AllBtn[i]}</s>`
    render()
};
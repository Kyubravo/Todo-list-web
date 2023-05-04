addTaskBtn = document.getElementById("addTaskBtn");
taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", addTask);

let id = 0;
function addTask() {
    // Remove "No Items" text
    if (id == 0) {
        taskList.children[0].remove();
    }

    // Create List Item
    let newTask = document.createElement('li');
    taskList.appendChild(newTask);

    let div = document.createElement('div');
    newTask.appendChild(div);
    div.innerHTML = `
    <div class="hstack mt-2 mb-2 ms-4 me-4">
        <div class="input-group me-4">
            <span class="input-group-text" id="taskIndex${id}">${id}</span>
            <input type="text" id="task${id}" class="form-control" placeholder="Task name" aria-label="Task name">
        </div>
        <input class="form-check-input" type="checkbox" id="c${id}">
    </div>`;
    newTask.appendChild(document.createElement('hr'));

    // Increment the id
    id++;
}
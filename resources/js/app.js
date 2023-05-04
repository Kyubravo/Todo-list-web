newTaskBtn = document.getElementById("newTaskBtn");
newTaskName = document.getElementById("newTaskName");
taskList = document.getElementById("taskList");
newTaskBtn.addEventListener("click", addTaskBtnPress);

let id = 1;
function addTask(taskName) {
    // Remove "No Items" text
    if (id == 1) {
        taskList.children[0].remove();
    }

    // Create List Item
    let newTask = document.createElement('li');
    taskList.appendChild(newTask);

    let div = document.createElement('div');
    newTask.appendChild(div);
    div.innerHTML = `
    <div class="hstack mb-2 mt-2 ms-4 me-4 justify-content-between">
        <div>
            <span class="font-monospace" id="taskIndex${id}">${id}- </span>
            <label class="form-check-label" for="c${id}" id="taskName${id}">${taskName}</label>
        </div>
        <input class="form-check-input" type="checkbox" id="c${id}">
    </div>`;
    newTask.appendChild(document.createElement('hr'));

    // Increment the id
    id++;
}

function addTaskBtnPress() {
    addTask(newTaskName.value)
    
    newTaskName.value = ""
}
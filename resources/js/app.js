addTaskBtn = document.getElementById("addTaskBtn");
taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", addTask);

let id = 1;
function addTask() {
    // Remove "No Items" text
    if (id == 1) {
        console.dir(taskList)
        taskList.children[0].remove();
    }

    // Create List Item
    let newTask = document.createElement('li');
    taskList.appendChild(newTask);

    let div = document.createElement('div');
    newTask.appendChild(div);
    div.innerHTML = `
    <div class="hstack mt-2 mb-2 ms-4 me-4">
        <div class="inline-flex align-items-center">
            <span class="font-monospace" id="taskIndex${id}">${id}- </span>
            <input type="text" id="task${id}" class="form-control" placeholder="Task name" aria-label="Task name">
        </div>
    </div>`;
    newTask.appendChild(document.createElement('hr'));

    // Increment the id
    id++;
}
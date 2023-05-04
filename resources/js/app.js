addTaskBtn = document.getElementById("addTaskBtn");
taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", addTask);

let id = 1;
function addTask() {
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
    <div class="hstack mt-2 mb-2 ms-4 me-4">
        <div class="inline-flex align-items-center">
            <span class="font-monospace" id="taskIndex${id}">${id}- </span>
            <input type="text" id="task${id}" class="form-control" placeholder="Task name" aria-label="Task name">
        </div>
    </div>`;
    newTask.appendChild(document.createElement('hr'));

    // Subscribe the inputfield "Task name" event listener
    let inputField = document.getElementById(`task${id}`);
    inputField.addEventListener("focusout", e => {setTask(e, id);});


    // Increment the id
    id++;
}

function setTask(event, index) {
    if (event.target.value == "")
        return;
        
    // Get the <li> element
    listElement = event.target.parentElement.parentElement.parentElement;

    listElement.innerHTML = `
    <li>
        <div class="hstack mb-2 ms-4 me-4 justify-content-between">
            <div>
                <span class="font-monospace" id="taskIndex${index}">${index}- </span>
                <label class="form-check-label" for="c${index}" id="taskName${index}">${event.target.value}</label>
            </div>
            <input class="form-check-input" type="checkbox" id="c${index}">
        </div>
    </li>`;
    
}
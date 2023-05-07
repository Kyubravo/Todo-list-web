const newTaskBtn = document.getElementById("newTaskBtn");
const newTaskName = document.getElementById("newTaskName");
const taskList = document.getElementById("taskList");

newTaskBtn.addEventListener("click", addTaskBtnPress);
newTaskName.addEventListener("keydown", addTaskBtnPress)

class Task {
    constructor(taskName, completed) {
        this.taskName = taskName;
        this.completed = completed;
    }
}

let id = 1;
const taskArr = [];
function updateTaskList() {
    // Remove all <li>
    taskList.innerHTML = "";


    // Add all the children that are in taskArr
    if (taskArr.length === 0) { // if empty, display "No Items"
        // Create List Item
        let newTask = document.createElement('li');
        newTask.innerHTML = `<h3 class="h3 text-center">No Items</h3>`
        taskList.appendChild(newTask);
    } else {
        for (let i = 0; i < taskArr.length; i++) { // if contains tasks
            // Create List Item
            let newTask = document.createElement('li');
            taskList.appendChild(newTask);

            let div = document.createElement('div');
            newTask.appendChild(div);
            div.innerHTML = `
            <div class="hstack mb-2 mt-2 ms-4 me-4 justify-content-between">
                <div>
                    <span class="font-monospace" id="taskIndex${i+1}">${i+1}- </span>
                    <label class="form-check-label" for="c${i+1}" id="taskName${i+1}">${taskArr[i].taskName}</label>
                </div>
                <input class="form-check-input" type="checkbox" id="c${i+1}" ${taskArr[i].completed === true ? "checked" : ""}>
            </div>`;
            newTask.appendChild(document.createElement('hr'));

        }
    }
}
function addTask(taskName) {
    taskArr.push(new Task(taskName, false))
    updateTaskList();
}

function addTaskBtnPress(e) {
    switch (e.type){
        case "keydown":
            // Pressed Enter
            if (e.keyCode === 13 && newTaskName.value !== ""){
                addTask(newTaskName.value);
                newTaskName.value = ""
            }
            break;

        // Pressed the button
        case "click":
            addTask(newTaskName.value);
            newTaskName.value = ""
            break;
            
        default:
    }
    
}
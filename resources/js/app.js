const newTaskBtn = document.getElementById("newTaskBtn");
const newTaskName = document.getElementById("newTaskName");
const unfinishedTaskList = document.getElementById("taskList");
const finishedTaskList = document.getElementById("finishedTaskList");

newTaskBtn.addEventListener("click", addTaskBtnPress);
newTaskName.addEventListener("keydown", addTaskBtnPress);

class Task {
    constructor(taskName, completed) {
        this.taskName = taskName;
        this.completed = completed;
    }
}

const unfinishedTasks = [];
const finishedTasks = [];

function getEmptyTaskHTML(){
    return ` 
    <h3 class="h3 text-center">No Items</h3>
    `
}

function getTaskHTML(i, task){
    i++;
    let tick = task.completed === true;
    return `
    <div>
        <div class="hstack mb-2 mt-2 ms-4 me-4 justify-content-between">
            <div>
            <span class="font-monospace">${i}- </span>
            <label class="form-check-label" for="c${i}" id="${tick ? "f" : "u"}TaskName${i}">${task.taskName}</label>
            </div>
            <input class="form-check-input" type="checkbox" id="${tick ? "f" : "u"}c${i}" ${tick ? "checked" : ""}>
        </div>
    </div>`
}

function updateUnfinishedTaskList() {
    // Remove all <li>
    unfinishedTaskList.innerHTML = "";

    // Add all the children that are in taskArr
    if (unfinishedTasks.length === 0) { // if empty, display "No Items"
        // Create List Item
        let newTask = document.createElement('li');
        newTask.innerHTML = getEmptyTaskHTML();
        finishedTaskList.appendChild(newTask);
    } else {
        for (let i = 0; i < unfinishedTasks.length; i++) { // if contains tasks
            // Create List Item
            let newTask = document.createElement('li');
            unfinishedTaskList.appendChild(newTask);
            
            newTask.innerHTML = getTaskHTML(i, unfinishedTasks[i]);
            
            // Create Separator
            newTask.appendChild(document.createElement('hr'));

        }
    }
}

function updatefinishedTaskList() {
    // Remove all <li>
    finishedTaskList.innerHTML = "";

    for (let i = 0; i < finishedTasks.length; i++) { // if contains tasks
        // Create List Item
        let newTask = document.createElement('li');
        finishedTaskList.appendChild(newTask);
        
        newTask.innerHTML = getTaskHTML(i, finishedTasks[i]);
        
        // Create Separator
        newTask.appendChild(document.createElement('hr'));

    }
    
}

function addTask(taskName) {
    unfinishedTasks.push(new Task(taskName, false))
    updateUnfinishedTaskList();
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
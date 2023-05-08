const newTaskBtn = document.getElementById("newTaskBtn");
const newTaskName = document.getElementById("newTaskName");
const unfinishedTaskList = document.getElementById("taskList");
const finishedTaskList = document.getElementById("finishedTaskList");
const tasks_list = [];

newTaskBtn.addEventListener("click", update_task_list);
newTaskName.addEventListener("keydown", addTaskBtnPress);


function addTaskBtnPress(e) {
    if (e.keyCode === 13){
        update_task_list();
        newTaskName.value = ""
    }
}


function update_task_list() {
    if (newTaskName.value !== "") {
        addTask(newTaskName.value);
        newTaskName.value = ""
    }
}


class Task {
    constructor(task_id, task_name, completed) {
        this.id = task_id;
        this.name = task_name;
        this.is_completed = completed;
    }
}


function addTask() {
    const id = tasks_list.length + 1;
    tasks_list.push(new Task(id, newTaskName.value, false))
    updateTaskList();
}


function get_task_body(task, i, is_checked) {
    return `
    <div>
        <div class="hstack mb-2 mt-2 ms-4 me-4 justify-content-between">
            <div>
                <span class="font-monospace">${i}- </span>
                <label class="form-check-label" for="${task.id}">
                ${task.name}
                </label>
            </div>
            <input class="form-check-input" type="checkbox" id="${task.id}" onchange="tickChange(${task.id});" ${task.is_completed ? "checked" : ""}>
        </div>
    </div>`
}


function tickChange(id) {
    task_index = tasks_list.findIndex(task => task.id === id)
    updated_task = tasks_list[task_index]
    updated_task.is_completed = !updated_task.is_completed
    tasks_list[task_index] = updated_task
    updateTaskList()
}


function updateTaskList() {
    unfinishedTaskList.innerHTML = tasks_list
        .filter(task => task.is_completed === false)
        .map((task, i) => get_task_body(task, i));
    finishedTaskList.innerHTML = tasks_list
        .filter(task => task.is_completed === true)
        .map((task, i) => get_task_body(task, i));
}


updateTaskList();

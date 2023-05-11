const newTaskBtn = document.getElementById("newTaskBtn");
const newTaskName = document.getElementById("newTaskName");
const unfinishedTaskList = document.getElementById("taskList");
const finishedTaskList = document.getElementById("finishedTaskList");

function tickChange(checkbox, id) {
    const form = document.getElementById(id);
    checkbox.checked = true
    checkbox.value = checkbox.value == -1 ? -1 : checkbox.value;
    form.submit();
    
}


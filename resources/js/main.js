const newTaskBtn = document.getElementById("newTaskBtn");
const newTaskName = document.getElementById("newTaskName");
const unfinishedTaskList = document.getElementById("taskList");
const finishedTaskList = document.getElementById("finishedTaskList");

function tickChange(id) {
    const form = document.getElementById(id);
    form.submit();
    
}


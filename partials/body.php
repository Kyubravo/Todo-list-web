<div class="container mt-5" style="max-width: 600px;">
    <div class="rounded-3 bg-white shadow-lg">
        <header class="bg-dark text-white rounded-3">
            <h1 class="text-center h1">Todo List</h1>
        </header>
        <div class="d-flex">
            <div class="vstack m-3">
                <?php 
                $taskListId = "taskList";
                require("partials/task-list.php"); 

                require("partials/form.php");
                require("functions/addTask.php");
                ?>
            </div>
        </div>


        <!-- Finished Tasks -->
        <div class="d-flex mt-5">
            <div class="vstack m-3">
                <?php 
                $taskListId = "finishedTaskList";
                require("partials/task-list.php");
                ?>
            </div>
        </div>
    </div>
</div>
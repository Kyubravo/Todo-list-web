<div class="btn-group flex-fill mt-4 ms-4 me-4">
    <form action="<?= $_SERVER['PHP_SELF']?>" method="post" class="d-flex flex-fill">
        <input type="text" id="newTaskName" class="form-control" placeholder="Task name" aria-label="Task name" name="taskName" required>
        <button class="btn btn-primary" id="newTaskBtn">+</button>
    </form>
</div>

<?php

if ($_SERVER["REQUEST_METHOD"] === "POST"){
    require("Database.php");
    echo "-----" . $_POST["taskName"];
    $query = "INSERT INTO items (title, is_complete) VALUES (? , 0)";

    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $_POST["taskName"]);

    $stmt->execute();

}
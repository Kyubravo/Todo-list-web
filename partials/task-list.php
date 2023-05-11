<ul id=<?= $taskListId?>>
    <?php
    $taskClass = new Tasks($conn, $taskListType);
    $taskArr = $taskClass->getTasksArr();

    foreach ($taskArr as $record) {
        
        $taskId = (int )$record["id"];
        $taskName = $record["title"];
        $is_complete = (int) $record["is_complete"];
        require("partials/task.php");
    }
    ?>
</ul>

<!DOCTYPE html>
<html lang="en">
<?php 
require("Database.php"); // Script not related to view, idk where to put it
require("classes/Tasks.php"); 
require("functions/addTask.php");
require("functions/updateTask.php");
?> 

<head>
    <?php require "partials/head.php"; ?>
</head>


<body class="bg-blue-300">
    <?php require "partials/body.php"; ?>
    <?php require "partials/foot.php"; ?>
</body>
</html>

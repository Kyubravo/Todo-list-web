<?php

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["taskName"])){
    
    $query = "INSERT INTO items (title, is_complete) VALUES (? , 0)";

    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $_POST["taskName"]);

    $stmt->execute();

}
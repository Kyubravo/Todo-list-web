<?php
var_dump($_POST);
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["checkbox"])){

    $var = $_POST["checkbox"] == -1 ? 0 : (int) $_POST["checkbox"];
    $query = "UPDATE items SET is_complete = CASE is_complete WHEN 1 THEN 0 ELSE 1 END WHERE id = $var;";

    $conn->query($query);


}
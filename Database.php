<?php

$hostname = "localhost";
$username = "root";
$password = "";
$database = "todo";
$port = "3306";


$conn = new mysqli($hostname, $username, $password, $database, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
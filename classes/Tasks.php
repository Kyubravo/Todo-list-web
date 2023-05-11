<?php
class Tasks {
    private $conn;
    private $is_complete;
    public function __construct($mysqliConnection ,$is_complete){
        $this->conn = $mysqliConnection;
        $this->is_complete = $is_complete;
    }
    public function getTasksArr(){
        $query = "SELECT * FROM items WHERE is_complete = $this->is_complete";
        echo $query;
        $results = $this->conn -> query($query);

        return $results;
        
    }
}
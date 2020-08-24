<?php

$server = "localhost";
$dbuser = "root";
$dbpassword = "";
$dbname = "grafik";

try {
    $conn = new PDO("mysql:host=$server;dbname=$dbname","$dbuser","$dbpassword");
    $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
    die('Unable to connect with the database');
}
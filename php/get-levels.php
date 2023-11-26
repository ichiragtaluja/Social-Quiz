<?php

// $dsn = "mysql:host=localhost;dbname=social-quiz;charset=utf8mb4";

// $dbusername = "root";
// $dbpassword = "";
// $pdo = new PDO($dsn, $dbusername, $dbpassword);
include("partials/dbconnect.php");

$stmt = $pdo->prepare("SELECT * FROM `levels`");

$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo (json_encode($results));
<?php

$dsn = "mysql:host=localhost;dbname=social-quiz;charset=utf8mb4";

$level = $_GET["level"];
$dbusername = "root";
$dbpassword = "";
$pdo = new PDO($dsn, $dbusername, $dbpassword);

$stmt = $pdo->prepare("SELECT * FROM `questions` INNER JOIN `levels` ON `questions`.`level` = `levels`.`level-id` WHERE `levels`.`level`= '$level';");

$stmt->execute();

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo (json_encode($results));

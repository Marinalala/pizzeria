<?php
header("Access-Control-Allow-Origin: *");
$nom = $_POST['nom'];
$image = $_POST['image'];
$description = $_POST['description'];

$connection = new mysqli("localhost", "root", "", "pizzeria");

$request = $connection->prepare("INSERT INTO `pizza` (`nom`, `image`, `description`) VALUES (?, ?, ?)");

$request->bind_param("sss", $nom, $image, $description);

$request->execute();

$request->close();
$connection->close();

?>
<?php
header("Access-Control-Allow-Origin: *");

echo "salut";

$bdd_id = $_POST['id'];
$bdd_nom = $_POST['nom'];
$bdd_image = $_POST['image'];
$bdd_description = $_POST['description'];

$connection = new mysqli("localhost", "root", "", "pizzeria");

$request = $connection->prepare("UPDATE `pizza` SET nom='$bdd_nom' WHERE id =$bdd_id");
$request->execute();
$request->close();

$request = $connection->prepare("UPDATE `pizza` SET image='$bdd_image' WHERE id =$bdd_id");
$request->execute();
$request->close();

$request = $connection->prepare("UPDATE `pizza` SET description='$bdd_description' WHERE id =$bdd_id");
$request->execute();
$request->close();

$connection->close();

?>
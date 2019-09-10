<?php
header("Access-Control-Allow-Origin: *");
echo "salut";
$bdd_id = $_POST['id'];
$bdd_nom = $_POST['nom'];
$bdd_image = $_POST['image'];
$bdd_description = $_POST['description'];

$connection = new mysqli("localhost", "root", "", "pizza");

$request = $connection->prepare("UPDATE `pizza` SET nom='$nom' WHERE id ='$bdd_id'");
$request = $connection->prepare("UPDATE `pizza` SET nom='$image' WHERE id ='$bdd_id'");
$request = $connection->prepare("UPDATE `pizza` SET nom='$description' WHERE id ='$bdd_id'");

$request->execute();

$request->close();
$connection->close();

?>
<?php
header("Access-Control-Allow-Origin: *");
echo "salut";
$bdd_id = $_POST['id'];

$connection = new mysqli("localhost", "root", "", "pizza");

$request = $connection->prepare("DELETE FROM `pizza` WHERE id ='$bdd_id'");

$request->execute();

$request->close();
$connection->close();

?>
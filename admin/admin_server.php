<?php

// TODO : POur corriger les erreurs de nom de domaine placer vos fichier dans le dossier WWW ou HTDOCS

// On récupere les valeurs envoyé par la requete AJAX / formulaire
$nom = $_POST['nom'];
$image = $_POST['image'];

// Il faut établir une connexion avec la base de donnée
$connection = new mysqli("localhost", "root", "", "pizza");
// Il faut préparer la requete SQL
// $request = $connection->prepare("INSERT INTO utilisateur (id, mail, mdp) VALUES (NULL, ?, ?)");
$request = $connection->prepare("INSERT INTO `pizza` (`nom`, `image`) VALUES (?, ?)");
// On renseigne les valeurs dynamiques de la requete
$request->bind_param("ss",$nom, $image, );
// On execute la requete
$request->execute();
// On ferme la connexion avec la base de donnée et la requette
$request->close();
$connection->close();

// ps : il faudra vérifier que l'utilisateur n'est pas déja inscrit
?>
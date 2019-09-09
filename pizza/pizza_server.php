<?php

// TODO : POur corriger les erreurs de nom de domaine placer vos fichier dans le dossier WWW ou HTDOCS

// On récupere les valeurs envoyé par la requete AJAX / formulaire
$prix = $_POST['prix'];


// Vérifier que toutes les informations ont bien été envoyé
if (!$titre || !$superficie || !$chambre|| !$salle_bain || !$cuisine|| !$wifi || !$tele|| !$prix) {
    echo "Le formulaire est mal rempli";
    exit(); // On termine le programme
}


// Il faut établir une connexion avec la base de donnée
$connection = new mysqli("localhost", "root", "", "sylvainyahia");
// Il faut préparer la requete SQL
// $request = $connection->prepare("INSERT INTO utilisateur (id, mail, mdp) VALUES (NULL, ?, ?)");
$request = $connection->prepare("INSERT INTO `location` (`titre`, `superficie`, `nbChambre`, `nbSalleDeBain`, `cuisine`, `wifi`, `television`, `prix`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
// On renseigne les valeurs dynamiques de la requete
$request->bind_param("ssssssss",$titre, $superficie, $chambre, $salle_bain, $cuisine, $wifi, $tele, $prix);
// On execute la requete
$request->execute();
// On ferme la connexion avec la base de donnée et la requette
$request->close();
$connection->close();

// ps : il faudra vérifier que l'utilisateur n'est pas déja inscrit
?>
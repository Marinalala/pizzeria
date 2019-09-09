<?php

// TODO : POur corriger les erreurs de nom de domaine placer vos fichier dans le dossier WWW ou HTDOCS

// On récupere les valeurs envoyé par la requete AJAX / formulaire
$name = $_POST['name'];
$fname = $_POST['fname'];
$adress = $_POST['adress'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = $_POST['password'];

// Vérifier que toutes les informations ont bien été envoyé
if (!$name || !$fname || !$adress || !$email || !$phone || !$password) {
    echo "Le formulaire est mal rempli";
    exit(); // On termine le programme
}

// On vérifie la syntaxe de l'adresse email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Votre email est incorrect!";
    exit(); // On termine le programme
}

// On prepare la hash du mot de passe
$hash = password_hash($password, PASSWORD_DEFAULT);

// Il faut établir une connexion avec la base de donnée
$connection = new mysqli("localhost", "root", "", "pizzeria");
// Il faut préparer la requete SQL
$request = $connection->prepare("INSERT INTO client (name, fname, adress, email, phone, password) VALUES (?, ?, ?, ?,?,?)");
// On renseigne les valeurs dynamiques de la requete
$request->bind_param("ssssss", $email, $hash);
// On execute la requete
$request->execute();
// On ferme la connexion avec la base de donnée et la requette
$request->close();
$connection->close();


if (password_verify($password, $bdd_password)) {
    $tab = [
        'valid' => true,
        'message' => "Inscription réussi !",
        'redirect' => "../pizza/pizza.html"
    ];
    echo json_encode($tab);
} else {
    $tab = [
        'valid' => true,
        'message' => "Inscription réussi !",
        'redirect' => null
    ];
    echo json_encode($tab);
}

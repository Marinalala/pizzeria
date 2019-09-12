<?php
header("Access-Control-Allow-Origin: *");
// TODO : POur corriger les erreurs de nom de domaine placer vos fichier dans le dossier WWW ou HTDOCS

// On récupere les valeurs envoyé par la requete AJAX / formulaire
$name = $_POST['nom'];
$fname = $_POST['fname'];
$adresse = $_POST['adresse'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$password = $_POST['password'];

// Vérifier que toutes les informations ont bien été envoyé
if (!$name || !$fname || !$adresse || !$email || !$telephone || !$password) {
    $tab = [
        'message' => "Inscription a !"
    ];
    echo json_encode($tab);
    exit(); // On termine le programme
}

// On vérifie la syntaxe de l'adresse email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $tab = [
        'message' => "Inscription b !"
    ];
    echo json_encode($tab);
    exit(); // On termine le programme
}

// On prepare la hash du mot de passe
$hash = password_hash($password, PASSWORD_DEFAULT);

// Il faut établir une connexion avec la base de donnée
$connection = new mysqli("localhost", "root", "", "pizzeria");
// Il faut préparer la requete SQL
$request = $connection->prepare("INSERT INTO client (nom, adresse, telephone, fname, password, email) VALUES (?, ?, ?, ?,?,?)");
// On renseigne les valeurs dynamiques de la requete
$request->bind_param("ssssss", $name,  $adresse, $telephone,  $fname,  $hash , $email);
// On execute la requete
$request->execute();


// On ferme la connexion avec la base de donnée et la requette
$request->close();
$connection->close();

$tab = [
    'message' => "Inscription réussi !",
    'redirect' => "../accueil/index.html"
];
echo json_encode($tab);

<?php

use App\Classes\Manager;

require_once "./Settings/db.php";
require_once './classes/Manager.class.php';

$manager = new Manager($db);

$json = file_get_contents('php://input'); //Prend le contenu du fichier et le transforme en cahîne de caractéres 
$data = json_decode($json, true); //Decode ou convertie un objet json en objet php

$manager->changeCharacter($data['id'], $data['newName']);

$response = [
    'status' => 'success',
    'message' => "Character with ID ".$data['id']." change."
];

echo json_encode($response);
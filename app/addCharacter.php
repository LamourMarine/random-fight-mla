<?php

use App\Classes\Manager;

require_once "./Settings/db.php";
require_once "./classes/Manager.class.php";

$manager = new Manager($db);

$json = file_get_contents('php://input');
$data = json_decode($json, true);

$manager->addCharacter($data['name'], $data['classes']);

$response = [
    'status' => 'success',
    'message' => "Le personnage '".$data['name']."' a été créé avec succès !"
];

echo json_encode($response);
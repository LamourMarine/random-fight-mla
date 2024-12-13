<?php

use App\Classes\Manager;

require_once "./Settings/db.php";
require_once './classes/Manager.class.php';

$manager = new Manager($db);

$json = file_get_contents('php://input');
$data = json_decode($json, true);

$manager->deleteCharacter($data);

$response = [
    'status' => 'success',
    'message' => "Character with ID $data deleted."
];

echo json_encode($response);
<?php
session_start();

$_SESSION["team1"] = '';
$_SESSION["team2"] = '';

use App\Classes\Docker;
use App\Classes\GitHub;
use App\Classes\Go;
use App\Classes\Java;
use App\Classes\Linux;
use App\Classes\Manager;
use App\CLasses\MariaDB;
use App\Classes\Php;
use App\Classes\Podman;
use App\Classes\Swift;

require_once './Settings/db.php';
require_once './classes/Manager.class.php';

require_once './classes/Character.class.php';
require_once './classes/Docker.class.php';
require_once './classes/GitHub.class.php';
require_once './classes/Go.class.php';
require_once './classes/Java.class.php';
require_once './classes/Linux.class.php';
require_once './classes/MariaDB.class.php';
require_once './classes/Php.class.php';
require_once './classes/Podman.class.php';
require_once './classes/Swift.class.php';

function createChar($class, $char) {
    switch($class){
        case 'linux':
            $char['name_Character'] = new Linux($char['name_Character']);
            return $char['name_Character'];
        break;
    
        case 'docker':
            $char['name_Character'] = new Docker($char['name_Character']);
            return $char['name_Character'];
        break;
    
        case 'github':
            $char['name_Character'] = new GitHub($char['name_Character']);
            return $char['name_Character'];

        break;    
    
        case 'go':
            $char['name_Character'] = new Go($char['name_Character']);
            return $char['name_Character'];

        break;   
    
        case 'java':
            $char['name_Character'] = new Java($char['name_Character']);
            return $char['name_Character'];

        break;
    
        case 'mariadb':
            $char['name_Character'] = new MariaDB($char['name_Character']);
            return $char['name_Character'];

        break;
    
        case 'php':
            $char['name_Character'] = new Php($char['name_Character']);
            return $char['name_Character'];


        break;
    
        case 'podman':
            $char['name_Character'] = new Podman($char['name_Character']);
            return $char['name_Character'];

        break;
    
        case 'swift':
            $char['name_Character'] = new Swift($char['name_Character']);
            return $char['name_Character'];


        break;
    
        default : 
            http_response_code(400);
            echo json_encode(['error' => 'Invalid character type']);
            exit;
        }
}


$manager = new Manager($db);

$json = file_get_contents('php://input');
$data = json_decode($json, true);

$team1 = $data["team1"];
$team2 = $data["team2"];

$team1Assist = $data["team1Assist"];
$team2Assist = $data["team2Assist"];

$team1Name = $data["team1Name"];
$team2Name = $data["team2Name"];

$team1Comp = [];
$team2Comp = [];


foreach ($team1 as $id) {
    $char = $manager->getCharacterById($id);
    $class = strToLower($char['class_Character']);
    //creation dynamique des perso via leur classes
    $team1Comp[] = createChar($class, $char);
}

foreach ($team2 as $id) {

    $char = $manager->getCharacterById($id);

    $class = strToLower($char['class_Character']);

    //creation dynamique des perso via leur classes

    $team2Comp[] =  createChar($class, $char);
    
}

$team1Array = [];
$team2Array = [];


foreach($team1Comp as $value){
    $team1Array[] = $value->toArray();
}

foreach($team2Comp as $value){
    $team2Array[] = $value->toArray();
}

usort($team1Array, function($a, $b) {
    return $b['speed'] <=> $a['speed'];
});

usort($team2Array, function($a, $b) {
    return $b['speed'] <=> $a['speed'];
});


$_SESSION['team1'] = $team1Array;
$_SESSION['team2'] = $team2Array;
$_SESSION['team1Assist'] = $team1Assist;
$_SESSION['team2Assist'] = $team2Assist;
$_SESSION['team1Name'] = $team1Name;
$_SESSION['team2Name'] = $team2Name;


return true;
?>
<?php 

use App\Classes\Manager;

require_once './classes/Manager.class.php';
require_once './Settings/db.php';

$manager = new Manager($db);

$json = file_get_contents("php://input");
$data = json_decode($json);


$team = $data->winner;
$amount = $data->xp;

$team = implode('","', $team);
$team = '"'.$team.'"';
echo "<pre>";
print_r($team);
echo "</pre>";
echo "<pre>";
print_r($amount);
echo "</pre>";

$manager->getXp($amount, $team);
?>
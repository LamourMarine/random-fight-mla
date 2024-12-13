<?php
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

require_once '../Settings/db.php';
require_once '../classes/Manager.class.php';

require_once '../classes/Character.class.php';
require_once '../classes/Docker.class.php';
require_once '../classes/GitHub.class.php';
require_once '../classes/Go.class.php';
require_once '../classes/Java.class.php';
require_once '../classes/Linux.class.php';
require_once '../classes/MariaDB.class.php';
require_once '../classes/Php.class.php';
require_once '../classes/Podman.class.php';
require_once '../classes/Swift.class.php';

session_start();

$team1 = (!isset($_SESSION['team1'])) ? "" : $_SESSION['team1'];
$team2 = (!isset($_SESSION['team2'])) ? "" : $_SESSION['team2'];


$team1Json = json_encode($team1);
$team2Json = json_encode($team2);

$teamOneAssist = (!isset($_SESSION['team1Assist'])) ? "" : $_SESSION['team1Assist'];
$teamTwoAssist = (!isset($_SESSION['team2Assist'])) ? "" : $_SESSION['team2Assist'];


$teamOneName = (!isset($_SESSION['team1Name'])) ? "" : $_SESSION['team1Name'];
$teamTwoName = (!isset($_SESSION['team2Name'])) ? "" : $_SESSION['team2Name'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FIGHT</title>
    <link rel="stylesheet" href="../style/style.css">
</head>
<body id="fight">

    <header>
        <div id="teamName">
            <div class="teamResult">The Game ...</div>

            <div class="teamLeft">
                <div class="logoAvatar" width="50px" height="50px"></div>
                <div class="nameTeam"></div>
            </div>
        
            <div class="teamRight">
                <div class="logoAvatar" width="50px" height="50px"></div>
                <div class="nameTeam"></div>
            </div>
        </div>    
    </header>
    
    <div id="fightContainer">

        <div id="containerResult">
        </div>

        <div id="teamOne">
            <div id="charOneTeamOne"></div>
            <div id="charTwoTeamOne"></div>
            <div id="charThreeTeamOne"></div>
            <div id="charFourTeamOne"></div>
            <div id="charFiveTeamOne"></div>
        </div>

        <div id="teamTwo">
            <div id="charOneTeamTwo"></div>
            <div id="charTwoTeamTwo"></div>
            <div id="charThreeTeamTwo"></div>
            <div id="charFourTeamTwo"></div>
            <div id="charFiveTeamTwo"></div>
        </div>

    </div>

    <div class="team1" hidden data-team='<?php echo $team1Json ?>' data-assist= '<?= $teamOneAssist ?>' data-name = '<?= $teamOneName?>'></div>
    <div class="team2" hidden data-team='<?php echo $team2Json?>' data-assist= '<?= $teamTwoAssist ?>' data-name = '<?= $teamTwoName?>'></div>

    <?php include_once "../component/victoryModal.php"; ?>

</body>
<script src="../script/combat.js"></script>
<script src="../script/script.js"></script>
</html>

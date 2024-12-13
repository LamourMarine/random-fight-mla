<?php 

    use App\Classes\Manager;


    require_once '../Settings/db.php';
    require_once '../classes/Manager.class.php';


    $manager = new Manager($db);
    ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Syntax Showdown</title>
    <link rel="stylesheet" href="../style/style.css">
</head>
<body>

        <main>
            <section class="teamSelectContainer">
                <div id="teamOne">
                    <select name="" class="teamName teamSelect">
                        <?php
                    $teams = $manager->getTeamsList();
                    foreach ($teams as $key => $value) {
                        echo "<option> ". $value['team_name_team'] ."</option>";
                    }
                    ?>
                    </select>
                    <div class="teamComp" ></div>
                    <div class="assist">
                        <div class="assistsAvatar hacker" data-assist="hacker"></div>
                        <div class="assistsAvatar ia" data-assist="ia"></div>
                        <div class="assistsAvatar dev" data-assist="dev"></div>
                    </div>
                </div>  
            
                <div class="centerContainer">
                    <div>
                        <h1>Composition des équipes</h1>
                        <p>de 1 à 5 joueurs</p>
                        <p id="confirmAdd"></p>
                    </div>
                        <div class="charListContainer">
                            <div class="charList">
                            </div>  
                        </div>
                </div>


                <div id="teamTwo">
                    <select name="" class="teamName teamSelect">
                        <?php
                        $teams = $manager->getTeamsList();
                        foreach ($teams as $key => $value) {
                            echo "<option> ". $value['team_name_team'] ."</option>";
                            }
                        ?>
                    </select>
                    <div class="teamComp">
                        
                    </div>
                    <div class="assist">
                        <div class="assistsAvatar hacker" data-assist="hacker"></div>
                        <div class="assistsAvatar ia" data-assist="ia"></div>
                        <div class="assistsAvatar dev" data-assist="dev"></div>
                    </div>
                    </div>
            </section>

            <section class="option">
                <button id="back"> <a href="../index.php">retour</a></button>
                <button id="next" onclick="sendTeam()">suivant</button>
            </section>
            
            <?php
                include_once '../component/addModal.php';
                include_once '../component/deleteModal.php';
                include_once '../component/changeModal.php';
            ?>

        
            
        </main>
</body>

<script src="../script/script.js"></script>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/style.css">
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Shadows+Into+Light&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Faster+One&family=Shadows+Into+Light&display=swap" rel="stylesheet">
    <title>Modals</title>
</head>
<body>
    <?php 
        require_once './component/loginModal.php';
        require_once './component/registerModal.php';
        require_once './component/ruleModal.php'
        ?>
        
<!-- Page d'accueil -->
    <div class="background-page" id="homePage">
        <div class="title">
            <h1>SYNTAX SHOWDOWN</h1>
        </div>
        <div class="gif-container">
            <img src="./asset/img/runningPhp.gif" alt="Running PHP">
        </div>
    </div>

    <!-- Page de chargement -->
    <div class="background-page hidden" id="loadingPage">
        <div class="loading-container">
            <img src="./asset/img/Chargement.png" alt="Loading Wheel">
            <p>Chargement...</p> 
        </div>
    </div>
    <section id="menuHome" class="hidden">
        <button id="playBtn"><a href="./pages/teamselect.php">> PLAY</a></button>
    </section>
    <div class="terminal hidden">
        <p>sh-5.2$ Choisissez votre langage ... Que la bataille commence !!!</p>
        <p class="register" id='openHelpModal' onclick="showModalHelp()">sh-5.2$ SYNTAX SHOWDOWN -- HELP?</p> 
        <p class="register" onclick="openRegisterModal()">sh-5.2$ MKDIR CRÉER UN COMPTE</p>
        <p class="register" onclick="openLoginModal()">sh-5.2$ CD ./CONNEXION<p>
    </div>


    <script src="./script/script.js"></script>
</body>
</html>
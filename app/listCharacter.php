    <?php

    use App\Classes\Manager;

    require_once "./Settings/db.php";
    require_once "./classes/Manager.class.php";

    $manager = new Manager($db);

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    
    $characters = $manager->characterList();
    
    echo json_encode($characters);
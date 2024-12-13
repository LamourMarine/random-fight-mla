<?php

namespace App\Classes;

use PDO;

class Manager {
    //attributes
    private $db;

    const CHARACTER = "character";
    const CHARACTER_IN = "character_in";
    const TEAM = "team";
    const PLAYER = "player";

    // constructor
    public function __construct(PDO $db)
    {
        $this->setDb($db);
    }

    // setters
    public function setDb(PDO $db)
    {
        $this->db = $db;
    }

    // getters
    public function getDb()
    {
        return $this->db;
    }

    // methods

    public function characterList() {
        $sql= "SELECT * FROM `character` ORDER BY id_Character DESC";
        $stmt = $this->db->query($sql);
        $characters = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $characters;
    }

    public function getCharacterById($id){
        $sql = 'SELECT * from `character` WHERE id_character = ' .$id;
        $stmt = $this->db->query($sql);
        $char = $stmt->fetch(PDO::FETCH_ASSOC);

        return $char;
    }

    public function deleteCharacter($id){
        try {
            $sql = "DELETE FROM `character` WHERE id_Character=$id";
            $stmt = $this->db->prepare($sql);
            $stmt->execute();
        } catch (\Throwable $th) {
            echo 'can\'t access this page try again';
            header("Location: index.php");
            exit();
        }
    }

    public function addCharacter(string $name, string $class){
        $sql = "INSERT INTO `character`(`class_Character`, `name_Character`, `avatar_Character`) VALUES ('".$class."','".$name."','".$class.".webp')";
        $stmt = $this->db->prepare($sql);
        
        try {
            $stmt->execute();
            return true;
        } catch (\PDOException $e) {
            // Log du message d'erreur si nécessaire
            return false;
        }
    }


    public function changeCharacter ($id, $newName) {
        try {
            $sql = "UPDATE `character` SET `name_Character` = :newName WHERE `id_Character` = :id";
            $stmt = $this->db->prepare($sql);

            // Lier les valeurs aux paramètres
        $stmt->bindParam(':newName', $newName);
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);

        // Exécuter la requête
        $stmt->execute();

            return true;
        } catch (\Exception $e) {
            return "Erreur lors de la modification du nom du personnage : " . $e->getMessage();
        }

    }

    public function getTeamsList(){
        try {
            $sql = "SELECT team_name_team, victory_team ,defeat_team FROM team";
            $stmt = $this->db->query($sql);
            $teams = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        catch(\Exception $e){
            return "Erreur lors de la récupération des teams";
        }
        return $teams;
    }

    public function getXp($amount, $names){
        try{
            $sql = 'UPDATE `character` SET `xp_Character`= `xp_Character`+ ' . $amount .' WHERE name_Character in ('.$names.')';
            $stmt = $this->db->prepare($sql);
            $stmt->execute();
        }
        catch(\Exception $e){
            return "Erreur lors de l'attribution de l'experience";
        }
    }
    
}


?>

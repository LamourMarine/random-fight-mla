<?php

namespace App\Classes;

class MariaDB extends Character {

    //attributes
    
    private string $name;
    private string $avatar;


    //constructor

    public function __construct(
        $name, 
        $avatar = "mariaDB.webp", 
        $speed = 5, 
        $power = 30, 
        $resilience = 125
    )
    {
        $this->setName($name);
        $this->setAvatar($avatar);
        parent::__construct($speed, $power, $resilience);
    }

    //getters

    public function getName(){
        return $this->name;
    }

    public function getAvatar(){
        return $this->avatar;
    }

    //setters

    public function setName($name){
        $this->name = $name;
    }

    
    public function setAvatar($avatar){
        $this->avatar = $avatar;
    }
    //methods
    
    public function toArray() {
        return [
            'name' => $this->name,
            'speed' => $this->speed,
            'power' => $this->power,
            'resilience' => $this->resilience,
            'avatar' => $this->avatar
        ];
    }
}
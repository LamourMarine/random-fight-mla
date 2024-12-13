<?php

namespace App\Classes;

class Podman extends Character{
    //attributes

    private string $name;
    private string $avatar;

    //constructor

    public function __construct
    (
        $name, 
        $avatar = "podman.webp", 
        $speed = 8, 
        $power = 30, 
        $resilience = 300
    )
    {
        parent::__construct($speed, $power, $resilience);
        $this->setName($name);
        $this->setAvatar($avatar);
    }
    
    //getters

    public function getName() {
        return $this->name;
    }

    public function getAvatar() {
        return $this->avatar;
    }

    //setters

    public function setName($value) {
        $this->name = $value;
    }

    public function setAvatar($value) {
        $this->avatar = $value;
    }

    //method
    
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
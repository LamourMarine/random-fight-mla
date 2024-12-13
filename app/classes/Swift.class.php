<?php

namespace App\Classes;

class Swift extends Character {
    // Attributes
    private string $avatar;
    private string $name;

    // Constructor
    public function __construct(
        $name, 
        $speed = 6, 
        $power = 30, 
        $resilience = 225, 
        $avatar = "swift.webp")
    {
        parent:: __construct($speed, $power, $resilience);
        $this->setAvatar($avatar);
        $this->setName($name);
    }

    // Getters
    public function getAvatar() {
        return $this->avatar;
    }
    public function getName() {
        return $this->name;
    }

    // Setters
    public function setAvatar($avatar) {
        $this->avatar = $avatar;
    }
    public function setName($name) {
        $this->name = $name;
    }

    // Methods
    
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

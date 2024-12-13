<?php

namespace App\Classes;

class Java extends Character {
    // Attributes
    private string $name;
    private string $avatar;

    // Constructor
    public function __construct(
        $name,
        $speed = 8,
        $power = 50,
        $resilience = 175,
        $avatar = "java.webp")
    {
        parent::__construct($speed, $power, $resilience);
        $this->setName($name);
        $this->setAvatar($avatar);
    }
    
    // Getters
    public function getName() {
        return $this->name;
    }
    public function getAvatar() {
        return $this->avatar;
    }
    
    // Setters
    public function setName($name) {
        $this->name = $name;
    }
    public function setAvatar($avatar) {
        $this->avatar = $avatar;
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
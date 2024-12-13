<?php

namespace App\Classes;

class GitHub extends Character {
    //Attributes
    private string $avatar;
    private string $name;

    //Constructor
    public function __construct(
        $name,
        $speed = 7,
        $power = 40,
        $resilience = 200,
        $avatar = "gitHub.webp"
        )
    {
        parent::__construct($speed, $power, $resilience);
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
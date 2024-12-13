<?php

namespace App\Classes;

class Go extends Character {

    //attribute
    private string $avatar;
    private string $name;

    //constructor
    public function __construct(
        $name,
        $speed = 4,
        $power = 40,
        $resilience = 100,
        $avatar = "go.webp"
    )

    {
        parent:: __construct($speed, $power, $resilience);
        $this->setAvatar ($avatar);
        $this->setName ($name);
    }
    //getters
    public function getAvatar() {
        return $this->avatar;
    }

    public function getName () {
        return $this->name;
    }

    //setters
    public function setAvatar($avatar) {
        $this->avatar = $avatar;
    }

    public function setName($name) {
        $this->name = $name;
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

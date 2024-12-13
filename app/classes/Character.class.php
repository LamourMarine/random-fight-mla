<?php 

namespace App\Classes;

class Character {
    //attribute
    protected float $speed;
    protected float $power;
    protected float $resilience;

    //costructor
    public function __construct ($param1, $param2, $param3) {
        $this->speed = $param1;
        $this->power = $param2;
        $this->resilience = $param3;
    }

    //setters
    public function setSpeed($param){
        $this->speed = $param;
    }

    public function setPower($param) {
        $this->power = $param;
    }

    public function setResilience($param) {
        $this->resilience = $param;
    }

    //getters
    public function getSpeed() {
        return $this->speed;
    }

    public function getPower() {
        return $this->power;
    }

    public function getResilience() {
        return $this->resilience;
    }

    //methods



}
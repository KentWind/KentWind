<?php

class HistoricalData {
    
    private $id;
    private $speed;
    private $direction;
    private $datetime;
    
    function __construct($array) {
        $this->id = $array['id'];
        $this->speed = $array['speed'];
        $this->direction = $array['direction'];
        $this->datetime = $array['time'];   
    }
    
    public function getID() {
        return $this->id;
    }
    
    public function getSpeed() {
        return $this->speed;
    }
    
    public function getDirection() {
        return $this->direction;
    }
    
    public function getDateTime() {
        return $this->datetime;
    }
    
}

?>
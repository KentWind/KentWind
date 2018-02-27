<?php

class WindSensor {
    
    private $id;
    private $location;
    private $x;
    private $y;
    
    function __construct($array) {
        $this->id = $array['id'];
        $this->location = $array['location'];
        $this->x = $array['x'];
        $this->y = $array['y'];
    }
    
    public function getID() {
        return $this->id;
    }
    
    public function getLocation() {
        return $this->location;
    }
    
    public function getX() {
        return $this->x;
    }
    
    public function getY() {
        return $this->y;
    }
    
}

?>
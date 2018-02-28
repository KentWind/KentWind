<?php

/*
*
* kent_wind
* administrator
* kentWind123
*
*/

class LiveData {
    
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
	
	public function getJSON() {
		$assoc_array = array(	"id" 		=> $id,
								"speed" 	=> $speed,
								"direction" => $direction,
								"datetime" 	=> $datetime		);
		return json_encode($assoc_array);
	}
    
}

?>
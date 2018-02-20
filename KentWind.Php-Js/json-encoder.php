<?php
//Test data simulating a query, which was returned as an associative array.
$result = array("device_id" => 2, "speed" => 38, "direction" => 8);

//Adds the <script type="text/javascript"> var php_json = <?php to_json($result); </script> to the <head> tag of index.php.
function insert_json_script($result) {
    echo "<script>var php_json = " . json_encode($result) . ";</script>\n";
}
?>
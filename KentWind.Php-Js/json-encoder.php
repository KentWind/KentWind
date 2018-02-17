<?php
//Test data simulating a query, which is an associative array retrived from a database.
$result = array("id" => 2, "speed" => 38, "direction" => 8);

//Convert the associative array to json.
function to_json($result) {
    return json_encode($result);
}

//Adds the <script type="text/javascript"> var php_json = <?php to_json($result); </script> to the <head> tag of index.php.
function insert_json_script($result) {
    echo "<script type='text/javascript'> var php_json = " . to_json($result) . "; </script>";
}
?>
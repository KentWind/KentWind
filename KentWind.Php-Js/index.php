<?php
include "json-encoder.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TEST PAGE</title>
    <?php
    insert_json_script($result);    //Function from the json-encoder.php
    ?>
    <script type="text/javascript" src="TestObject.class.js"></script>
    <script type="text/javascript" src="json-test.js"></script>
</head>
<body>
    <h2>TEST</h2>
    <div id="js-object">
    <!-- javascript object will be printed here when implemented -->
    </div>
</body>
</html>
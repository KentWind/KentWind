<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TEST PAGE</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type ="text/javascript" src="../js/generator.js"></script>
</head>
<body>
<!-- <script> generateData(); </script> -->
<script> generateSensors(); </script>
</body>
</html>

<?php
/*
    NOTE:   To use this file, you must change the path of the ajax call in generator.js to:
            IF using generateData():
                url: '../php/utilities/serverPush.php'
            IF using generateSensors():
                url: '../php/utilities/sensorPush.php'

*/
?>
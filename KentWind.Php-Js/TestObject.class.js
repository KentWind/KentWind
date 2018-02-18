//Constructor of a TestObject in javascript.

function TestObject(json_object) {
    this.id = json_object["id"];
    this.speed = json_object["speed"];
    this.direction = json_object["direction"];
    //TO DO: Implement a member function that will print the object into the HTML.
    this.get_id = function() {
        return this.id;
    }
}

function output(TestObject) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var objectHTML = "<h3>\"TestObject::output\" Function Test</h3>" + 
                             "<p><b>Device_id</b> = " + TestObject.id + "</p>" +
                             "<p><b>Speed</b> = " + TestObject.speed + "</p>" +
                             "<p><b>Direction</b> = " + TestObject.direction + "</p>";
            document.getElementById("js-object").innerHTML = objectHTML;
        }
    };
    xmlhttp.open("GET", "index.php", true);
    xmlhttp.send();
}
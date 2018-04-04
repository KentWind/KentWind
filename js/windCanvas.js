var TextArea;
function start() {
  TextArea = new textarea();
}

var x = 0;
function textarea() {

  this.context = document.getElementById("windMap").getContext("2d");
  this.context.scale(1, 1);
  this.context.width(100);
  this.context.height(100);

  var i;
  i = window.setInterval(function() {
    //TextArea.context.clearRect(0, 0, TextArea.canvas.width, TextArea.canvas.height);
    ++ x;
    var ctx = document.getElementById("windMap")[0].getContext("2d");
    ctx.strokeStyle="#000000";
    ctx.font="20px Arial";
    ctx.strokeText("my text");
  }, 20)

}

start();

/*
var c = document.getElementById("windMap");
var ctx = c.getContext("2d");
var txt = "It's probably windy.";
//var x = new Array("Day1","Day2","Day3","Day4","Day5");
//       for(var i = 0; i < x.length; i++){
var i = 0;
//while (true){
setInterval( function() {
    ++ i;
//    var size = ctx.measureText(txt);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.rotate( ((Math.PI * 2) / 360) );
    ctx.fillText(txt,100,100);

}, 50);*/

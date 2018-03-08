LON_NW = 278.648815;
LAT_NW = 41.153616;

LON_SE = 278.666856;
LAT_SE = 41.140062;

LON_LENGTH = 0.018041;
LAT_HEIGHT = 0.013554;

GRID_X = 100;
GRID_Y = 75;
GRID_SPACING = LON_LENGTH / GRID_X; // 0.00018041

var data = [
  {
    lat: 41.15142,
    lon: 278.66566,
    xComp: -20,
    yComp: 5
  },
  {
    lat: 41.14943,
    lon: 278.66577,
    xComp: 10,
    yComp: 16
  },
  {
    lat: 41.14515,
    lon: 278.66603,
    xComp: 3,
    yComp: -12
  },
  {
    lat: 41.147504,
    lon: 278.66096,
    xComp: 10,
    yComp: 7
  },
  {
    lat: 41.148732,
    lon: 278.654651,
    xComp: -10,
    yComp: 9
  },
  {
    lat: 41.148699,
    lon: 278.655381,
    xComp: -12,
    yComp: -9
  },
  {
    lat: 41.148570,
    lon: 278.654565,
    xComp: -15,
    yComp: -4
  },
]

var gridArrayLat = [];
var gridArrayLon = [];

for(var i = 0; i < GRID_X; i++) {   //75
  gridArrayLat[i] = new Array();
  gridArrayLon[i] = new Array();
  for(var j = 0; j < GRID_Y; j++) { //100
    gridArrayLat[i][j] = null;
    gridArrayLon[i][j] = null;
  }
}

for(var i = 0; i < data.length; i++) {
  var iIndex = Math.floor(((LAT_NW - data[i].lat) / LAT_HEIGHT) * GRID_Y);
  console.log(iIndex);

  var jIndex = Math.floor(((data[i].lon - LON_NW) / LON_LENGTH) * GRID_X);
  console.log(jIndex);

  gridArrayLat[iIndex][jIndex] = data[i].yComp;
  gridArrayLon[iIndex][jIndex] = data[i].xComp;
}

console.log(gridArrayLat);

var latComps = [];
var lonComps = [];

for(var i = 0; i < gridArrayLat.length; i++)
{
    latComps = latComps.concat(gridArrayLat[i]);
    lonComps = lonComps.concat(gridArrayLon[i]);
}

var jsonObj = JSON.stringify(latComps);
console.log(jsonObj);

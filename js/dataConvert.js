// Cumulated data object, all sensor data will be input into the "data" array
var gfs = [{
    header: {
      parameterCategory: 2,
      parameterNumber: 2,
      nx: null,
      ny: null,
      basicAngle: 0,
      subDivisions: 0,
      lo1: null,
      la1: null,
      lo2: 359,
      la2: -90,
      dx: null,
      dy: null
    },
    data: null,
    meta: {
        date: "2014-11-30T12:00:00.000Z"
    }
  },
  {
    header: {
      parameterCategory: 2,
      parameterNumber: 3,
    },
    data: null,
    meta: {
        date: "2014-11-30T12:00:00.000Z"
    }
}]

function convertData(dbData) {

  LON_NW = 278.648215;      // Longitude coordinate for North West corner of sensor data
  LAT_NW = 41.153616;       // Latitude coordinate for North West corner of sensor data

  LON_SE = 278.666856;      // Longitude coordinate for South East corner of sensor data
  LAT_SE = 41.140062;       // Latitude coordinate for South East corner of sensor data

  LON_LENGTH = 0.018041;    // Longitudinal width of sensor data
  LAT_HEIGHT = 0.013554;    // Latitudinal height of sensor data

  GRID_X = 40;              // Width of the grid after conversion from lat/lon coordinates to 2D array indexes (j value)
  GRID_Y = 30;              // Height of the grid after conversion from lat/lon coordinates to 2D array indexes (i value)
  GRID_SPACING = LON_LENGTH / GRID_X;  // lat/lon distance between each grid point

  // Assign gfs object's header variables to corresponding values, windy.js pulls the values from the header
  gfs[0].header.nx = GRID_X;
  gfs[0].header.ny = GRID_Y;
  gfs[0].header.lo1 = LON_NW;
  gfs[0].header.la1 = LAT_NW;
  gfs[0].header.dx = GRID_SPACING;
  gfs[0].header.dy = GRID_SPACING;

  var data = [];

  // variables used to randomly generate sensor information
  var numBuildings = 64;
  var sensorsPerBuilding = 5;
  var numSensors = numBuildings * sensorsPerBuilding;
  var minRandomSpeed = 0;
  var maxRandomSpeed = 30;

  // insert database sensor data into array
  for(var i = 0; i < dbData.length; i++) {
    data[i] = {};
    //var speed = randomInRange(minRandomSpeed, maxRandomSpeed);
    //var direction = randomInRange(0, 15);

    var components = vectorToComponents(parseFloat(dbData[i].Speed), parseFloat(dbData[i].Direction));

    data[i].lat = parseFloat(dbData[i].Latitude);
    data[i].lon = 360 + parseFloat(dbData[i].Longitude);
    data[i].xComp = components.u;
    data[i].yComp = components.v;
  }

  var gridArrayLat = [];
  var gridArrayLon = [];

  // Creates 2D array of 0s, certain 0s will later be replaced with wind values
  for(var i = 0; i < GRID_X; i++) {
    gridArrayLat[i] = new Array();
    gridArrayLon[i] = new Array();
    for(var j = 0; j < GRID_Y; j++) {
      gridArrayLat[i][j] = 0;
      gridArrayLon[i][j] = 0;
    }
  }

  // place sensor data in correct grid location
  for(var i = 0; i < data.length; i++) {
    //convert lat/lon to grid indexes
    var iIndex = Math.floor(((LAT_NW - data[i].lat) / LAT_HEIGHT) * GRID_Y);
    var jIndex = Math.floor(((data[i].lon - LON_NW) / LON_LENGTH) * GRID_X);

    console.log(iIndex )

    var yDirection = data[i].yComp;
    var xDirection = data[i].xComp;

    gridArrayLat[jIndex][iIndex] = yDirection;
    gridArrayLon[jIndex][iIndex] = xDirection;
  }

  // wind prediction data extender; extends current wind data to fill in blank spaces of data
  for(var i = 0; i < data.length; i++) {
    var iIndex = Math.floor(((LAT_NW - data[i].lat) / LAT_HEIGHT) * GRID_Y);
    var jIndex = Math.floor(((data[i].lon - LON_NW) / LON_LENGTH) * GRID_X);

    var yDirection = data[i].yComp;
    var xDirection = data[i].xComp;

    var angle = Math.atan((yDirection + .001) / (xDirection + .001)) * (180 / Math.PI);
    negAngle = angle;
    angle = Math.abs(angle);

    if (angle > -22.5 && angle < 22.5) {
      if (iIndex < GRID_X) {
        if(gridArrayLat[jIndex][iIndex + 1] == 0) gridArrayLat[jIndex][iIndex + 1] = yDirection * .75;
        if(gridArrayLon[jIndex][iIndex + 1] == 0)gridArrayLon[jIndex][iIndex + 1] = xDirection * .75;
      }
      if (iIndex > 0) {
        if(gridArrayLat[jIndex][iIndex - 1] == 0) gridArrayLat[jIndex][iIndex - 1] = yDirection * .75;
        if(gridArrayLon[jIndex][iIndex - 1] == 0) gridArrayLon[jIndex][iIndex - 1] = xDirection * .75;
      }
    }
    if (angle > 22.5 && angle < 67.5) {
      if (iIndex < GRID_X && jIndex < GRID_Y) {
        if(gridArrayLat[jIndex + 1][iIndex + 1] == 0) gridArrayLat[jIndex + 1][iIndex + 1] = yDirection * .75;
        if(gridArrayLon[jIndex + 1][iIndex + 1] == 0) gridArrayLon[jIndex + 1][iIndex + 1] = xDirection * .75;
      }
      if (iIndex > 0 && jIndex > 0) {
        if(gridArrayLat[jIndex - 1][iIndex - 1] == 0) gridArrayLat[jIndex - 1][iIndex - 1] = yDirection * .75;
        if(gridArrayLon[jIndex - 1][iIndex - 1] == 0) gridArrayLon[jIndex - 1][iIndex - 1] = xDirection * .75;
      }
    }
    if (angle > 67.5 && angle < 90) {
      if (jIndex < GRID_Y) {
        if(gridArrayLat[jIndex + 1][iIndex] == 0) gridArrayLat[jIndex + 1][iIndex] = yDirection * .75;
        if(gridArrayLon[jIndex + 1][iIndex] == 0) gridArrayLon[jIndex + 1][iIndex] = xDirection * .75;
      }
      if (jIndex > 0) {
        if(gridArrayLat[jIndex - 1][iIndex] == 0) gridArrayLat[jIndex - 1][iIndex] = yDirection * .75;
        if(gridArrayLon[jIndex - 1][iIndex] == 0) gridArrayLon[jIndex - 1][iIndex] = xDirection * .75;
      }
    }
    if (negAngle < -22.5 && negAngle > -67.5) {
      if (iIndex < GRID_X && jIndex > 0) {
        if(gridArrayLat[jIndex - 1][iIndex + 1] == 0) gridArrayLat[jIndex - 1][iIndex + 1] = yDirection * .75;
        if(gridArrayLon[jIndex - 1][iIndex + 1] == 0) gridArrayLon[jIndex - 1][iIndex + 1] = xDirection * .75;
      }
      if (iIndex > 0 && jIndex < GRID_Y) {
        if(gridArrayLat[jIndex + 1][iIndex - 1] == 0) gridArrayLat[jIndex + 1][iIndex - 1] = yDirection * .75;
        if(gridArrayLon[jIndex + 1][iIndex - 1] == 0) gridArrayLon[jIndex + 1][iIndex - 1] = xDirection * .75;
      }
    }
  }


  var latComps = [];
  var lonComps = [];

  for(var i = 0; i < gridArrayLat.length; i++)
  {
      latComps = latComps.concat(gridArrayLat[i]);
      lonComps = lonComps.concat(gridArrayLon[i]);
  }

  gfs[0].data = latComps;
  gfs[1].data = lonComps;
}

function vectorToComponents(speed, direction) {
  var theta = (-1 * ( (direction / 16) * 2 * Math.PI) ) + (Math.PI / 2);
  //(-1 * (direction / 16) * 2 * Math.PI)) + (Math.PI / 2));
  var v = speed * Math.sin(theta);
  var u = speed * Math.cos(theta);
  return {u, v};
}

function randomInRange(min, max) {
  return Math.random() * (max-min) + min;
}

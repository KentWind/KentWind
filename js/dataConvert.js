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

  MIN_LON = 278.64181;      // Longitude coordinate for North West corner of sensor data
  MAX_LAT = 41.153616;       // Latitude coordinate for North West corner of sensor data

  MAX_LON = 278.666856;      // Longitude coordinate for South East corner of sensor data
  MIN_LAT = 41.140062;       // Latitude coordinate for South East corner of sensor data

  LON_LENGTH = MAX_LON - MIN_LON;    // Longitudinal width of sensor data
  LAT_HEIGHT = MAX_LAT - MIN_LAT;    // Latitudinal height of sensor data

  GRID_X = 25;              // Width of the grid after conversion from lat/lon coordinates to 2D array indexes (j value)
  GRID_Y = 25;              // Height of the grid after conversion from lat/lon coordinates to 2D array indexes (i value)
  GRID_SPACING_X = LON_LENGTH / GRID_X;  // lat/lon distance between each grid point
  GRID_SPACING_Y = LAT_HEIGHT / GRID_Y;  // lat/lon distance between each grid point


  // Assign gfs object's header variables to corresponding values, windy.js pulls the values from the header
  gfs[0].header.nx = GRID_X;
  gfs[0].header.ny = GRID_Y;
  gfs[0].header.lo1 = MIN_LON;
  gfs[0].header.la1 = MAX_LAT;
  gfs[0].header.dx = GRID_SPACING_X;
  gfs[0].header.dy = GRID_SPACING_Y;

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

    var components = vectorToComponents(parseFloat(dbData[i].Speed), parseFloat(dbData[i].Direction));

    data[i].lat = parseFloat(dbData[i].Latitude);
    data[i].lon = 360 + parseFloat(dbData[i].Longitude);
    data[i].xComp = components.u;
    data[i].yComp = components.v;
    data[i].direction = parseFloat(dbData[i].Direction);
  }

  var YComponentGrid = [];
  var XComponentGrid = [];

  // Creates 2D array of 0s, certain 0s will later be replaced with wind values
  for(var i = 0; i < GRID_X; i++) {
    YComponentGrid[i] = new Array();
    XComponentGrid[i] = new Array();
    for(var j = 0; j < GRID_Y; j++) {
      YComponentGrid[i][j] = 0;
      XComponentGrid[i][j] = 0;
    }
  }

  // place sensor data in correct grid location
  for(var i = 0; i < data.length; ++i) {
    //convert lat/lon to grid indexes
    var iIndex = Math.floor(((MAX_LAT - data[i].lat) / LAT_HEIGHT) * GRID_Y);
    var jIndex = Math.floor(((data[i].lon - MIN_LON) / LON_LENGTH) * GRID_X);

    // var lonDistanceFromLeft = data[i].lon - MIN_LON;
    // console.log(data[i].lon + " - " + MIN_LON + " = " + lonDistanceFromLeft);
    // console.log(lonDistanceFromLeft + " / " + LON_LENGTH + " = " + lonDistanceFromLeft / LON_LENGTH);
    // console.log((lonDistanceFromLeft / LON_LENGTH) + " * " + GRID_X + " = " + (lonDistanceFromLeft / LON_LENGTH) * GRID_Y);
    // console.log(Math.floor((lonDistanceFromLeft / LON_LENGTH) * GRID_X));
<<<<<<< HEAD
    // console.log(jIndex + " / " + GRID_X);
=======
>>>>>>> 6446144afb6752ee18d3413343eeac9c1584eb2f

    var yDirection = data[i].yComp;
    var xDirection = data[i].xComp;

    YComponentGrid[iIndex][jIndex] = yDirection;
    XComponentGrid[iIndex][jIndex] = xDirection;
  }

  // wind prediction data extender; extends current wind data to fill in blank spaces of data
  for(var i = 0; i < data.length; i++) {
    var iIndex = Math.floor(((MAX_LAT - data[i].lat) / LAT_HEIGHT) * GRID_Y);
    var jIndex = Math.floor(((data[i].lon - MIN_LON) / LON_LENGTH) * GRID_X);

    var yDirection = data[i].yComp;
    var xDirection = data[i].xComp;

    var fadeValue = .75;

    var angle = data[i].direction;
    if(angle > 7){
      angle = Math.abs(angle) - 8;
    } else {
      angle = Math.abs(angle);
    }
    for(j = 1; j < 7; j++) {
      if (angle == 4) {
        if (jIndex <= (GRID_X - j)) {
          if(YComponentGrid[iIndex][jIndex + j] == 0) YComponentGrid[iIndex][jIndex + j] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex][jIndex + j] == 0) XComponentGrid[iIndex][jIndex + j] = (xDirection * fadeValue) / j;
        }
        if (jIndex >= j) {
          if(YComponentGrid[iIndex][jIndex - j] == 0) YComponentGrid[iIndex][jIndex - j] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex][jIndex - j] == 0) XComponentGrid[iIndex][jIndex - j] = (xDirection * fadeValue) / j;
        }
      }
      if (angle == 0) {
        if (iIndex <= (GRID_Y - j)) {
          if(YComponentGrid[iIndex + j][jIndex] == 0) YComponentGrid[iIndex + j][jIndex] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex + j][jIndex] == 0) XComponentGrid[iIndex + j][jIndex] = (xDirection * fadeValue) / j;
        }
        if (iIndex >= j) {
          if(YComponentGrid[iIndex - j][jIndex] == 0) YComponentGrid[iIndex - j][jIndex] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex - j][jIndex] == 0) XComponentGrid[iIndex - j][jIndex] = (xDirection * fadeValue) / j;
        }
      }
      // if (angle >= 1 && angle <= 3) {
      if (angle == 2) {
        if (jIndex >= j && iIndex < GRID_Y) {
          if(YComponentGrid[iIndex + j][jIndex - j] == 0) YComponentGrid[iIndex + j][jIndex - j] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex + j][jIndex - j] == 0) XComponentGrid[iIndex + j][jIndex - j] = (xDirection * fadeValue) / j;
        }
        if (jIndex <= (GRID_X - j) && iIndex >= j ) {
          if(YComponentGrid[iIndex - j][jIndex + j] == 0) YComponentGrid[iIndex - j][jIndex + j] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex - j][jIndex + j] == 0) XComponentGrid[iIndex - j][jIndex + j] = (xDirection * fadeValue) / j;
        }
      }
      if (angle == 1) {
        if (jIndex >= j && iIndex < GRID_Y) {
          if(YComponentGrid[iIndex + j][jIndex - Math.floor(j / 2)] == 0) YComponentGrid[iIndex + j][jIndex - Math.floor(j / 2)] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex + j][jIndex - Math.floor(j / 2)] == 0) XComponentGrid[iIndex + j][jIndex - Math.floor(j / 2)] = (xDirection * fadeValue) / j;
        }
        if (jIndex <= (GRID_X - j) && iIndex >= j ) {
          if(YComponentGrid[iIndex - j][jIndex + Math.floor(j / 2)] == 0) YComponentGrid[iIndex - j][jIndex + Math.floor(j / 2)] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex - j][jIndex + Math.floor(j / 2)] == 0) XComponentGrid[iIndex - j][jIndex + Math.floor(j / 2)] = (xDirection * fadeValue) / j;
        }
      }
      if (angle == 3) {
        if (jIndex >= j && iIndex < GRID_Y) {
          if(YComponentGrid[iIndex + Math.floor(j / 2)][jIndex - j] == 0) YComponentGrid[iIndex + Math.floor(j / 2)][jIndex - j] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex + Math.floor(j / 2)][jIndex - j] == 0) XComponentGrid[iIndex + Math.floor(j / 2)][jIndex - j] = (xDirection * fadeValue) / j;
        }
        if (jIndex <= (GRID_X - j) && iIndex >= j ) {
          if(YComponentGrid[iIndex - Math.floor(j / 2)][jIndex + j] == 0) YComponentGrid[iIndex - Math.floor(j / 2)][jIndex + j] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex - Math.floor(j / 2)][jIndex + j] == 0) XComponentGrid[iIndex - Math.floor(j / 2)][jIndex + j] = (xDirection * fadeValue) / j;
        }
      }
      if (angle == 7) {
        if (jIndex <= (GRID_X - j) && iIndex <= (GRID_Y - j)) {
          if(YComponentGrid[iIndex + j][jIndex + Math.floor(j / 2)] == 0) YComponentGrid[iIndex + j][jIndex + Math.floor(j / 2)] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex + j][jIndex + Math.floor(j / 2)] == 0) XComponentGrid[iIndex + j][jIndex + Math.floor(j / 2)] = (xDirection * fadeValue) / j;
        }
        if (jIndex >= j && iIndex >= j) {
          if(YComponentGrid[iIndex - j][jIndex - Math.floor(j / 2)] == 0) YComponentGrid[iIndex - j][jIndex - Math.floor(j / 2)] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex - j][jIndex - Math.floor(j / 2)] == 0) XComponentGrid[iIndex - j][jIndex - Math.floor(j / 2)] = (xDirection * fadeValue) / j;
        }
      }
      if (angle == 5) {
        if (jIndex <= (GRID_X - j) && iIndex <= (GRID_Y - j)) {
          if(YComponentGrid[iIndex + Math.floor(j / 2)][jIndex + j] == 0) YComponentGrid[iIndex + Math.floor(j / 2)][jIndex + j] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex + Math.floor(j / 2)][jIndex + j] == 0) XComponentGrid[iIndex + Math.floor(j / 2)][jIndex + j] = (xDirection * fadeValue) / j;
        }
        if (jIndex >= j && iIndex >= j) {
          if(YComponentGrid[iIndex - Math.floor(j / 2)][jIndex - j] == 0) YComponentGrid[iIndex - Math.floor(j / 2)][jIndex - j] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex - Math.floor(j / 2)][jIndex - j] == 0) XComponentGrid[iIndex - Math.floor(j / 2)][jIndex - j] = (xDirection * fadeValue) / j;
        }
      }
      if (angle == 6) {
        if (jIndex <= (GRID_X - j) && iIndex <= (GRID_Y - j)) {
          if(YComponentGrid[iIndex + j][jIndex + j] == 0) YComponentGrid[iIndex + j][jIndex + j] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex + j][jIndex + j] == 0) XComponentGrid[iIndex + j][jIndex + j] = (xDirection * fadeValue) / j;
        }
        if (jIndex >= j && iIndex >= j) {
          if(YComponentGrid[iIndex - j][jIndex - j] == 0) YComponentGrid[iIndex - j][jIndex - j] = (yDirection * fadeValue) / j;
          if(XComponentGrid[iIndex - j][jIndex - j] == 0) XComponentGrid[iIndex - j][jIndex - j] = (xDirection * fadeValue) / j;
        }
      }
    }
  }


  var YComps = [];
  var XComps = [];

  for(var i = 0; i < YComponentGrid.length; i++)
  {
      YComps = YComps.concat(YComponentGrid[i]);
      XComps = XComps.concat(XComponentGrid[i]);
  }

  gfs[0].data = XComps;
  gfs[1].data = YComps;
}

function vectorToComponents(speed, direction) {
  //var theta = (-1 * ( (direction / 16) * 2 * Math.PI) );
  var theta = (-1 * (direction / 16) * 2 * Math.PI) + (Math.PI / 2);
  var v = speed * Math.sin(theta);
  var u = speed * Math.cos(theta);
  return {u, v};
}

function randomInRange(min, max) {
  return Math.random() * (max-min) + min;
}

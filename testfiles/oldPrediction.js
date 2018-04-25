var iIndex = Math.floor(((MAX_LAT - data[i].lat) / LAT_HEIGHT) * GRID_Y);
var jIndex = Math.floor(((data[i].lon - MIN_LON) / LON_LENGTH) * GRID_X);

var yDirection = data[i].yComp;
var xDirection = data[i].xComp;

var angle = data[i].direction;
angle = Math.abs(angle);

if (angle > -22.5 && angle < 22.5) {
  if (iIndex < GRID_X) {
    if(YComponentGrid[jIndex][iIndex + 1] == 0) YComponentGrid[jIndex][iIndex + 1] = yDirection * .75;
    if(XComponentGrid[jIndex][iIndex + 1] == 0) XComponentGrid[jIndex][iIndex + 1] = xDirection * .75;
  }
  if (iIndex > 0) {
    if(YComponentGrid[jIndex][iIndex - 1] == 0) YComponentGrid[jIndex][iIndex - 1] = yDirection * .75;
    if(XComponentGrid[jIndex][iIndex - 1] == 0) XComponentGrid[jIndex][iIndex - 1] = xDirection * .75;
  }
}
if (angle > 22.5 && angle < 67.5) {
  if (iIndex < GRID_X && jIndex < GRID_Y) {
    if(YComponentGrid[jIndex + 1][iIndex + 1] == 0) YComponentGrid[jIndex + 1][iIndex + 1] = yDirection * .75;
    if(XComponentGrid[jIndex + 1][iIndex + 1] == 0) XComponentGrid[jIndex + 1][iIndex + 1] = xDirection * .75;
  }
  if (iIndex > 0 && jIndex > 0) {
    if(YComponentGrid[jIndex - 1][iIndex - 1] == 0) YComponentGrid[jIndex - 1][iIndex - 1] = yDirection * .75;
    if(XComponentGrid[jIndex - 1][iIndex - 1] == 0) XComponentGrid[jIndex - 1][iIndex - 1] = xDirection * .75;
  }
}
if (angle > 67.5 && angle < 90) {
  if (jIndex < GRID_Y) {
    if(YComponentGrid[jIndex + 1][iIndex] == 0) YComponentGrid[jIndex + 1][iIndex] = yDirection * .75;
    if(XComponentGrid[jIndex + 1][iIndex] == 0) XComponentGrid[jIndex + 1][iIndex] = xDirection * .75;
  }
  if (jIndex > 0) {
    if(YComponentGrid[jIndex - 1][iIndex] == 0) YComponentGrid[jIndex - 1][iIndex] = yDirection * .75;
    if(XComponentGrid[jIndex - 1][iIndex] == 0) XComponentGrid[jIndex - 1][iIndex] = xDirection * .75;
  }
}
if (negAngle < -22.5 && negAngle > -67.5) {
  if (iIndex < GRID_X && jIndex > 0) {
    if(YComponentGrid[jIndex - 1][iIndex + 1] == 0) YComponentGrid[jIndex - 1][iIndex + 1] = yDirection * .75;
    if(XComponentGrid[jIndex - 1][iIndex + 1] == 0) XComponentGrid[jIndex - 1][iIndex + 1] = xDirection * .75;
  }
  if (iIndex > 0 && jIndex < GRID_Y) {
    if(YComponentGrid[jIndex + 1][iIndex - 1] == 0) YComponentGrid[jIndex + 1][iIndex - 1] = yDirection * .75;
    if(XComponentGrid[jIndex + 1][iIndex - 1] == 0) XComponentGrid[jIndex + 1][iIndex - 1] = xDirection * .75;
  }
}

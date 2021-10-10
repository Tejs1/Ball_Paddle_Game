const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");
let ballX = 50;
let ballY = 50;

window.onload = function () {
  //setting changes fps
  let fps = 60;
  setInterval(callFunctions, 1000 / fps);
};

// seperating move code from the Draw code
function callFunctions() {
  moveEverthing();
  drawEverthing();
}
function moveEverthing() {
  ballX = ballX + 1;
}
//function to group all draw code
function drawEverthing() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  //move and resize the box (paddle!)
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(10, 200, 10, 100);
  canvasContext.fillStyle = "grey";
  canvasContext.fillRect(ballX, ballY, 40, 40);
}

const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");
let ballX = 50;
let ballY = 250;
let ballSpeedX = 5;
let padddle1X = 10;
let padddle2X = 780;
let canvasX = 0;
let canvasY = 0;
let paddleWidth = 10;
let padddle1Y = 200;
let padddle2Y = 200;
const space = 10;

window.onload = function () {
  //setting changes fps
  let fps = 60;
  setInterval(function () {
    moveEverthing();
    drawEverthing();
  }, 1000 / fps);
};

// seperating move code from the Draw code

function moveEverthing() {
  ballX = ballX + ballSpeedX;
  if (ballX >= canvas.width - 2 * paddleWidth - space) {
    ballSpeedX = -ballSpeedX;
  }
  if (ballX <= canvasX + paddleWidth + space) {
    ballSpeedX = -ballSpeedX;
  }
}
//function to group all draw code
function drawEverthing() {
  colorRect(canvasX, canvasY, canvas.width, canvas.height, "black");
  colorRect(padddle1X, padddle1Y, paddleWidth, 100, "white");
  colorRect(padddle2X, padddle2Y, paddleWidth, 100, "white");
  colorRect(ballX, ballY, 10, 10, "red");
}
//function for drawing filled shapes
function colorRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}

//move the box (paddle!)

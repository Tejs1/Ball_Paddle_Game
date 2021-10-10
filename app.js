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
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(canvasX, canvasY, canvas.width, canvas.height);
  //move and resize the box (paddle!)
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(padddle1X, padddle1Y, paddleWidth, 100);
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(padddle2X, padddle2Y, paddleWidth, 100);
  canvasContext.fillStyle = "red";
  canvasContext.fillRect(ballX, ballY, 10, 10);
}

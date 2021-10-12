const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");
let ballX = 50;
let ballY = 250;
let ballSpeedX = 4;
let ballSpeedY = 1;
let paddle1X = 10;
let paddle2X = 780;
let canvasX = 0;
let canvasY = 0;
let paddleWidth = 10;
let paddle1Y = 200;
let paddle2Y = 200;
const space = 10;
const paddleHeight = 100;

window.onload = function () {
  //setting changes fps
  let fps = 60;
  setInterval(function () {
    moveEverthing();
    drawEverthing();
  }, 1000 / fps);

  canvas.addEventListener("mousemove", (e) => {
    let mousePose = calculateMousePosition(e);
    paddle1Y = mousePose.y - paddleHeight / 2;
  });
};

// seperating move code from the Draw code

function moveEverthing() {
  ballX = ballX + ballSpeedX;
  if (ballX >= canvas.width - 2 * paddleWidth - space) {
    ballSpeedX = -ballSpeedX;
  }
  if (ballX <= canvasX + 2 * paddleWidth + space) {
    ballSpeedX = -ballSpeedX;
  }
  ballY = ballY + ballSpeedY;
  if (ballY > canvas.height - 10) {
    ballSpeedY = -ballSpeedY;
  }
  if (ballY < canvasY + 10) {
    ballSpeedY = -ballSpeedY;
  }
}
//function to group all draw code
function drawEverthing() {
  //blackanvas
  colorRect(canvasX, canvasY, canvas.width, canvas.height, "black");
  //left paddle
  colorRect(paddle1X, paddle1Y, paddleWidth, paddleHeight, "white");
  //right paddle
  colorRect(paddle2X, paddle2Y, paddleWidth, paddleHeight, "white");
  //ball
  colorCircle(ballX, ballY, 10, "white");
}
// function for drawing circle
function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

//function for drawing filled rectangle
function colorRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}

//move the box (paddle!)
// mouse movement calcilation
function calculateMousePosition(e) {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseX = e.clientX - rect.left - root.scrollLeft;
  let mouseY = e.clientY - rect.left - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY,
  };
}

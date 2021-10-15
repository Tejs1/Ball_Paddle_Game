const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");
let ballX = 50;
let ballY = 250;
let ballSpeedX = 10;
const defaultSpeed = 5;
let ballSpeedY = defaultSpeed;
let paddle1X = 10;
let paddle2X = 780;
let canvasX = 0;
let canvasY = 0;
let paddleWidth = 10;
let paddle1Y = 200;
let paddle2Y = 200;
const radius = 10;
const space = 10;
const paddleHeight = 100;

window.onload = function () {
  //setting changes fps
  let fps = 55;
  setInterval(function () {
    moveEverthing();
    drawEverthing();
  }, 1000 / fps);
  //move the box (paddle!)
  canvas.addEventListener("mousemove", (e) => {
    let mousePose = calculateMousePosition(e);
    // paddle1Y = mousePose.y - paddleHeight / 2;
  });
};

// seperating move code from the Draw code

function moveEverthing() {
  paddle1Y = ballY - paddleHeight / 2;
  ballY = ballY + ballSpeedY;
  // const paddle2Center = paddle2Y + paddleHeight / 2;

  paddle2Y = ballY - paddleHeight * Math.sin(ballY / 600);

  // paddle2Y = ballY - paddleCenter;
  // console.log(Math.sin(ballY / 600));
  ballX = ballX + ballSpeedX;
  if (ballX >= canvas.width - 2 * paddleWidth - space) {
    //ball hits paddle
    if (ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
      // console.log(Math.random() * 10);
      if (Math.random() * 10 > 4) {
        if (ballSpeedY > 0) {
          ballSpeedY += defaultSpeed * (Math.random() + 0.5);
        } else {
          ballSpeedY -= defaultSpeed * (Math.random() + 0.5);
        }
      } else {
        if (ballSpeedY > 0) {
          ballSpeedY -= defaultSpeed * (Math.random() + 0.5);
        } else {
          ballSpeedY += defaultSpeed * (Math.random() + 0.5);
        }
      }
      ballSpeedX = -ballSpeedX;
      console.log(ballSpeedY);
    } else {
      resetBall();
    }
  }
  if (ballX <= canvasX + 2 * paddleWidth + space) {
    if (ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
      //changing Y direction
      if (ballY > paddle1Y + paddleHeight / 2) {
        // ballSpeedY = ballSpeedY + ballSpeedY * Math.random();
        // ballSpeedY = -ballSpeedY;
      }
      ballSpeedX = -ballSpeedX;
    } else {
      resetBall();
      // ballSpeedX = -ballSpeedX;
    }
  }

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
  colorCircle(ballX, ballY, radius, "white");
}
// function for drawing circle
function colorCircle(centerX, centerY, drawColor) {
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

//ball reset
function resetBall() {
  ballY = 500 * Math.random() + radius / 2;
  ballX = canvas.width - 2 * paddleWidth - space - radius;
  paddle2Y = ballY - paddleHeight / 2;
  // ballSpeedX = -ballSpeedX;
  ballSpeedY = defaultSpeed;
}

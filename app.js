const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");
const defaultSpeed = 5;
const radius = 10;
const space = 10;
const paddleHeight = 100;
const paddleWidth = 10;
let ballX = 500;
let ballY = 250;
let ballSpeedX = 10;
let ballSpeedY = defaultSpeed;
let paddle1X = 30;
let paddle2X = canvas.width - space - paddleWidth / 2;
let canvasX = 0;
let canvasY = 0;
let paddle1Y = 200;
let paddle2Y = 200;
// start = true;

window.onload = function () {
  //setting changes fps
  let fps = 70;
  setInterval(function () {
    drawEverthing();
    if (start) {
      moveEverthing();
    }
  }, 1000 / fps);
  //move the box (paddle!)

  console.log("ball speed " + ballSpeedX);
};

// seperating move code from the Draw code

function moveEverthing() {
  //paddle movement
  //Paddle Left
  canvas.addEventListener("mousemove", (e) => {
    let mousePose = calculateMousePosition(e);
    paddle1Y = mousePose.y - paddleHeight / 2;
  });

  //Paddle Right
  ballY = ballY + ballSpeedY;

  //Ball movement
  ballX = ballX + ballSpeedX;
  //ball reaches Right side
  if (ballX >= paddle2X - paddleWidth) {
    // if ball hits paddle
    if (ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
      ballSpeedX = -ballSpeedX;
      // Change speed by random
      if (Math.random() * 10 > 4) {
        //increases Speed
        if (ballSpeedY > 0) {
          ballSpeedY += defaultSpeed * (Math.random() + 0.5);
        } else {
          ballSpeedY -= defaultSpeed * (Math.random() + 0.5);
        }
        //decreases Speed
      } else {
        if (ballSpeedY > 0) {
          ballSpeedY -= defaultSpeed * (Math.random() + 0.5);
        } else {
          ballSpeedY += defaultSpeed * (Math.random() + 0.5);
        }
      }

      console.log(ballSpeedY);
    } else {
      resetBall();
    }
  }
  //ball reaches Left side
  if (ballX <= paddle1X + 3 * paddleWidth) {
    //if ball hits paddle
    if (ballY + radius > paddle1Y && ballY + radius < paddle1Y + paddleHeight) {
      //changing Y direction
      if (ballY > paddle1Y + paddleHeight / 2) {
        // ballSpeedY = ballSpeedY + ballSpeedY * Math.random();
        // ballSpeedY = -ballSpeedY;
      }
      ballSpeedX = -ballSpeedX;
    }
  }
  if (ballX < -200) {
    resetBall();
  }
  //change direction when hits top botoom
  if (ballY >= canvas.height - 2 * radius) {
    ballSpeedY = -ballSpeedY;
  }
  if (ballY < canvasY + 2 * radius) {
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
  ballY = 500 * Math.random();
  ballX = paddle2X - radius - space;
  paddle2Y = ballY - paddleHeight / 2;
  ballSpeedY = -defaultSpeed;
}

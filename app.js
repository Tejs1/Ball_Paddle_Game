const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");
let ballX = 50;
let ballY = 50;

window.onload = function () {
  drawEverthing();
};

//function to group all draw code
function drawEverthing() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(399, 0, 1, 600);
  canvasContext.fillStyle = "grey";
  canvasContext.fillRect(ballX, ballY, 400, 400);
}

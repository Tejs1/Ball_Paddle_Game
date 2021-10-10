const canvas = document.getElementById("gameCanvas");
const canvasContext = canvas.getContext("2d");

window.onload = function () {
  canvasContext.fillstyle = "black";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
};

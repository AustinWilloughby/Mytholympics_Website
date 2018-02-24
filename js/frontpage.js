let logoCanvas = document.getElementById('logoCanvas');
let logoCtx = logoCanvas.getContext('2d');

const LOGO_CANVAS_ASPECT_RATIO = 2.4;
const LOGO_MAX_WIDTH = 1000;
const MAX_CANVAS_HEIGHT = (LOGO_MAX_WIDTH * 1.15) / LOGO_CANVAS_ASPECT_RATIO;

var logo;
var logoDrawingHeight = 0;

(function () {
  resizeCanvas();

  logo = new Image();

  logo.addEventListener('load', function () {
    drawLogo();
    resizeCanvas();
  }, false);

  logo.src = '../img/Title.gif';
})();



document.getElementById("videoFrame").onload = function () {
  var rect = document.getElementById("videoFrame").getBoundingClientRect();
}



function drawLogo() {
  logoCtx.clearRect(0, 0, logoCtx.canvas.width, logoCtx.canvas.height);

  let width = Math.min(LOGO_MAX_WIDTH, logoCtx.canvas.offsetWidth * 0.9);


  let centerX = (logoCtx.canvas.offsetWidth / 2) - (width / 2)
  let yPos = (Math.sin(new Date().getTime() / 1000) * 4) + 5;
  logoDrawingHeight = width / (logo.width / logo.height);

  logoCtx.drawImage(logo, centerX, yPos, width, logoDrawingHeight);


  requestAnimationFrame(drawLogo);
}




window.onresize = resizeCanvas;

function resizeCanvas() {
  logoCtx.imageSmoothingEnabled = false;
  logoCtx.canvas.width = $('body').innerWidth();

  var minHeight = Math.min(logoCtx.canvas.width / LOGO_CANVAS_ASPECT_RATIO, MAX_CANVAS_HEIGHT);
  minHeight = Math.max(minHeight, logoDrawingHeight * 1.1);

  logoCtx.canvas.height = minHeight;
}

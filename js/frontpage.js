(function () {
  const LOGO_CANVAS_ASPECT_RATIO = 1.8;
  const LOGO_MAX_WIDTH = 1100;
  var logoCanvas = document.getElementById('logoCanvas');
  var logoCtx = logoCanvas.getContext('2d');


  logoCtx.canvas.height = logoCtx.canvas.width / LOGO_CANVAS_ASPECT_RATIO;

  var logo = new Image();

  logo.addEventListener('load', function () {
    drawLogo(logo, logo.width / logo.height, logoCtx, LOGO_MAX_WIDTH)
  }, false);

  logo.src = '../img/Title.gif';
})();

document.getElementById("videoFrame").onload = function () {
  var rect = document.getElementById("videoFrame").getBoundingClientRect();
}

window.onresize = function () {
  var logoCanvas = document.getElementById('logoCanvas');
  var logoCtx = logoCanvas.getContext('2d');

  logoCtx.canvas.height = logoCtx.canvas.width / LOGO_CANVAS_ASPECT_RATIO;
}

function drawLogo(image, aspectRatio, context, maxWidth) {

  var width = Math.min(maxWidth, context.canvas.width);

  context.drawImage(image, 0, 0, width, width / aspectRatio);

  requestAnimationFrame(drawLogo(image, aspectRatio, context, maxWidth));
}

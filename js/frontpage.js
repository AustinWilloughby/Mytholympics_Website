"use strict";

let logoCanvas = document.getElementById("logoCanvas");
let logoCtx = logoCanvas.getContext("2d");

const LOGO_CANVAS_ASPECT_RATIO = 2.4;
const LOGO_MAX_WIDTH = 1000;
const MAX_CANVAS_HEIGHT = (LOGO_MAX_WIDTH * 1.15) / LOGO_CANVAS_ASPECT_RATIO;

const VIDEO_ASPECT_RATIO = 16 / 9;
const VIDEO_MAX_WIDTH = 800;
const VIDEO_BORDER_ASPECT_RATIO = 1068 / 725;
const VIDEO_FRAME_TO_BORDER_SCALE = 1068 / 800;

let logo;
let logoDrawingHeight = 0;


//IFFE for quick image loading
((function () {
  handleScreenResize();

  logo = new Image();

  logo.addEventListener("load", function () {
    drawLogo();
    handleScreenResize();
  }, false);

  logo.src = "../img/Title.gif";
})());


//Hook up window events
window.onresize = handleScreenResize;
window.onfocus = handleScreenResize;

//Resizes elements on the screen based on the size of the window for a responsive design.
function handleScreenResize() {
  let bodyWidth = $("body").innerWidth();

  //Canvas Resizing
  logoCtx.imageSmoothingEnabled = false;
  logoCtx.canvas.width = bodyWidth;

  let minHeight = Math.min(logoCtx.canvas.width / LOGO_CANVAS_ASPECT_RATIO, MAX_CANVAS_HEIGHT);
  minHeight = Math.max(minHeight, logoDrawingHeight * 1.1);

  logoCtx.canvas.height = minHeight;

  //video iFrame Resizing
  let videoFrame = document.getElementById("videoFrame");
  videoFrame.width = Math.min(VIDEO_MAX_WIDTH, bodyWidth * 0.7);
  videoFrame.height = videoFrame.width / VIDEO_ASPECT_RATIO;

  //video iFrame Border Resizing
  let videoBorder = document.getElementById("videoBorder");
  videoBorder.width = videoFrame.width * VIDEO_FRAME_TO_BORDER_SCALE;
  videoBorder.height = videoBorder.width / VIDEO_BORDER_ASPECT_RATIO;

  //Calculate frame size
  let frameRect = videoFrame.getBoundingClientRect();
  let frameHalfWidth = (frameRect.right - frameRect.left) / 2;
  let frameHalfHeight = (frameRect.bottom - frameRect.top) / 2;

  //Calculate border position and size
  let borderRect = videoBorder.getBoundingClientRect();
  let borderCenterX = (borderRect.right + borderRect.left) / 2;
  let borderCenterY = (borderRect.bottom + borderRect.top) / 2;
  let borderWidth = borderRect.right - borderRect.left;
  let borderHeight = borderRect.bottom - borderRect.top;

  //Center the frame on the border (will be underneath due to z-index in css)
  videoFrame.style.left = (borderCenterX - frameHalfWidth - borderRect.left) + "px";
  videoFrame.style.top = (borderCenterY - frameHalfHeight - borderRect.top) + "px";

  //Resize stacking container
  let stackingContainer = document.getElementById("stackingContainer");
  stackingContainer.style.width = borderWidth + "px";
  stackingContainer.style.height = borderHeight + "px";

  //Reposition the footer
  let maxCoord = Math.max(window.innerHeight - 75, document.body.offsetHeight) - 75;
  document.querySelector("footer").style.top = maxCoord + "px";
}


//Draws and animates the logo image at the top of the page
function drawLogo() {
  logoCtx.clearRect(0, 0, logoCtx.canvas.width, logoCtx.canvas.height);

  let width = Math.min(LOGO_MAX_WIDTH, logoCtx.canvas.offsetWidth * 0.9);
  let centerX = (logoCtx.canvas.offsetWidth / 2) - (width / 2);
  let yPos = (Math.sin(Date.now() / 1000) * 4) + 5;
  logoDrawingHeight = width / (logo.width / logo.height);

  logoCtx.drawImage(logo, centerX, yPos, width, logoDrawingHeight);

  requestAnimationFrame(drawLogo);
}

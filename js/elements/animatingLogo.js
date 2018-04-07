"use strict";

let logoCanvas = document.getElementById("logoCanvas");
let logoCtx = logoCanvas.getContext("2d");

const LOGO_CANVAS_ASPECT_RATIO = 2.6;
let LOGO_MAX_WIDTH = 1000;
let MAX_CANVAS_HEIGHT = (LOGO_MAX_WIDTH * 1.3) / LOGO_CANVAS_ASPECT_RATIO;

let logo;
let logoDrawingHeight = 0;

//IFFE for quick image loading
((function () {
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      'use strict';
      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }


  //Resize the logo canvas
  handleLogoResize();


  //Load the logo in and set up the animation loop
  logo = new Image();

  logo.addEventListener("load", function () {
    drawLogo();
    handleScreenResize();
  }, false);

  //Check if we are on the main page. If not let us click the logo to return there.
  let fileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

  if (!fileName.includes("index") && fileName !== "/" && fileName != "") {
    logoCanvas.addEventListener('click', detectLogoClick);
    LOGO_MAX_WIDTH = 800;
    MAX_CANVAS_HEIGHT = 310;
    logoCanvas.style.marginTop = "5em";
    logoCanvas.style.marginBottom = "3em";
    handleLogoResize();
  }
  logo.src = "/img/title.png";
})());

//Handles resizing the canvas and logo
function handleLogoResize() {
  let bodyWidth = document.body.clientWidth;

  //Canvas Resizing
  logoCtx.imageSmoothingEnabled = false;
  logoCtx.canvas.width = bodyWidth;

  let minHeight = Math.min(logoCtx.canvas.width / LOGO_CANVAS_ASPECT_RATIO, MAX_CANVAS_HEIGHT);
  minHeight = Math.max(minHeight, logoDrawingHeight + 20);
  logoCtx.canvas.height = minHeight;
};

//Draws and animates the logo image at the top of the page
function drawLogo() {
  logoCtx.clearRect(0, 0, logoCtx.canvas.width, logoCtx.canvas.height);

  let width = Math.min(LOGO_MAX_WIDTH, logoCtx.canvas.offsetWidth * 0.9);
  let centerX = (logoCtx.canvas.offsetWidth / 2) - (width / 2);
  let yPos = (Math.sin(Date.now() / 2000) * 10 + 10);
  logoDrawingHeight = width / (logo.width / logo.height);

  logoCtx.drawImage(logo, centerX, yPos, width, logoDrawingHeight);

  requestAnimationFrame(drawLogo);
};

//Checks if the logo has been clicked, and if so navigates to the root (home page)
function detectLogoClick(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  if (logoCtx.getImageData(x, y, 1, 1).data[3] === 255) {
    window.location.href = "./";
  }
};

"use strict";

let videoFrame = document.getElementById("videoFrame");
let videoBorder = document.getElementById("videoBorder");

const VIDEO_ASPECT_RATIO = 16 / 9;
const VIDEO_MAX_WIDTH = 800;
const VIDEO_BORDER_ASPECT_RATIO = 1068 / 725;
const VIDEO_FRAME_TO_BORDER_SCALE = 1068 / 800;

//Resizes elements on the screen based on the size of the window for a responsive design.
function handleVideoResize() {
  let bodyWidth = document.body.clientWidth;

  //video iFrame Resizing
  videoFrame.width = Math.min(VIDEO_MAX_WIDTH, bodyWidth * 0.7);
  videoFrame.height = videoFrame.width / VIDEO_ASPECT_RATIO;

  //video iFrame Border Resizing
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
}

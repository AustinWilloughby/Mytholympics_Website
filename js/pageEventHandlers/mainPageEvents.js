"use strict";

//Hookup Events
window.onload = handleOnLoad;
window.onresize = handleScreenResize;
window.onfocus = handleScreenResize;

//Handles the loading of the main page
function handleOnLoad() {
  createDefaultFooter();
  handleScreenResize();
}

//Handling multiple events
function handleScreenResize() {
  handleFooterPositioning();
  handleLogoResize();
  handleVideoResize();
};

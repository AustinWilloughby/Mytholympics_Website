"use strict";

//Hookup Events
window.onload = handleOnLoad;
window.onresize = handleScreenResize;
window.onfocus = handleScreenResize;

//IFFE for before page loads
((function () {
  createDefaultHeader("Media");
  createDefaultFooter();
  handleScreenResize();
})());

//Handles the loading of the main page
function handleOnLoad() {
  handleScreenResize();
  document.getElementById("fadeinPage").style.opacity = 1;
}

//Handling multiple events
function handleScreenResize() {
  handleFooterPositioning();
  handleHeaderResize();
  handleLogoResize();
  handleVideoResize();
  handleSeparatorResize();
  handleGalleryResize();
};

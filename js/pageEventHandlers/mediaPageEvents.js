"use strict";

//Hookup Events
window.onload = handleOnLoad;
window.onresize = handleScreenResize;
window.onfocus = handleScreenResize;

//IFFE for before page loads
((function () {
  createDefaultHeader("Media");
  createDefaultFooter();
})());

//Handles the loading of the main page
function handleOnLoad() {
  handleScreenResize();
}

//Handling multiple events
function handleScreenResize() {
  handleFooterPositioning();
  handleLogoResize();
  handleVideoResize();
};

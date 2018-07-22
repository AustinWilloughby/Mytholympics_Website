"use strict";

//Hookup Events
window.onload = handleOnLoad;
window.onresize = handleScreenResize;
window.onfocus = handleScreenResize;

//IFFE for before page loads
((function () {
  createDefaultHeader("About Us");
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
  handleTextResize();
  handleSeparatorResize();
};

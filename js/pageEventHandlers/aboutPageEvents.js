"use strict";

//Hookup Events
window.onload = handleOnLoad;
window.onresize = handleScreenResize;
window.onfocus = handleScreenResize;
window.setInterval(handleFooterPositioning, 500);

//IFFE for before page loads
((function () {
  createDefaultHeader("About Us");
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
  handleTextResize();
  handleSeparatorResize();
};

"use strict";

//Hookup Events
window.onload = handleOnLoad;
window.onresize = handleScreenResize;
window.onfocus = handleScreenResize;

//IFFE for before page loads
((function () {
  createDefaultFooter();
  createDefaultHeader("The Game");
  populateRandomCharacters();
})());

//Handles the loading of the main page
function handleOnLoad() {
  handleScreenResize();
}

//Handling multiple events
function handleScreenResize() {
  handleFooterPositioning();
  handleHeaderResize();
  handleLogoResize();
  handleVideoResize();
  handleTextResize();
  handleSeparatorResize();
};

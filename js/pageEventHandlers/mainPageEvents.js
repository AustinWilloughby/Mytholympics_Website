//Hookup Events
window.onload = handleScreenResize;
window.onresize = handleScreenResize;
window.onfocus = handleScreenResize;

//Handling multiple events
function handleScreenResize() {
  handleFooterPositioning();
  handleLogoResize();
  handleVideoResize();
};

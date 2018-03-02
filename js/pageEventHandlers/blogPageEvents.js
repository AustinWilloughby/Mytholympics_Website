//Hookup Events
window.onload = handleOnLoad;
window.onresize = handleScreenResize;
window.onfocus = handleScreenResize;


function handleOnLoad() {
  createDefaultFooter();
  handleScreenResize();

  let blogDiv = document.getElementById("postWrapper");
  blogDiv.addEventListener('onresize', function () {
    handleFooterPositioning();
  });
}

//Handling multiple events
function handleScreenResize() {
  handleFooterPositioning();
  handleLogoResize();
};

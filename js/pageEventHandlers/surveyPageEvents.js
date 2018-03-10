"use strict";

var alreadyBig = false;

//IFFE for before page loads
((function () {
  createDefaultHeader("Survey");
  createDefaultFooter();
})());

document.getElementById('survey').onload = function () {
  handleFooterPositioning();

  var survey = document.getElementById('survey');
  if (survey.height > 1000 && alreadyBig) {
    survey.height = "500px";
  } else {
    alreadyBig = true;
  }
}

window.onload = handleOnLoad;

function handleOnLoad() {
  handleFooterPositioning();
  handleHeaderResize();
}

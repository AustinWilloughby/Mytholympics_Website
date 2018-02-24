window.onload = function () {
  let maxCoord = Math.max(window.innerHeight - 75, document.body.offsetHeight) - 75;
  document.querySelector("footer").style.top = maxCoord + "px";
  document.querySelector("footer").style.visibility = "visible";
};

window.onload = function () {
  let maxCoord = Math.max(window.innerHeight, document.body.offsetHeight) + 10;
  document.querySelector("footer").style.top = maxCoord + "px";
  document.querySelector("footer").style.visibility = "visible";
};

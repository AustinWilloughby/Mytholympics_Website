const MAX_TEXT_WIDTH = 700;

function handleTextResize() {
  let textBounders = document.getElementsByClassName("textBounder");
  let bodyWidth = document.body.clientWidth;

  let textBounderWidth = Math.min(MAX_TEXT_WIDTH, bodyWidth * 0.8);

  for (let i = 0; i < textBounders.length; i++) {
    textBounders[i].style.width = textBounderWidth + "px";
  }
};

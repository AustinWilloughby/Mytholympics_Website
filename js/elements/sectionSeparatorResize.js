const MAX_SEPARATOR_WIDTH = 700;

function handleSeparatorResize() {
  let separators = document.getElementsByClassName("sectionSeparator");
  let bodyWidth = document.body.clientWidth;

  let separatorWidth = Math.min(MAX_SEPARATOR_WIDTH, bodyWidth * 0.8);

  for (let i = 0; i < separators.length; i++) {
    separators[i].style.width = separatorWidth + "px";
  }
};

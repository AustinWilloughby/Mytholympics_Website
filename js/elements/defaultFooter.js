let footer;

function createDefaultFooter() {
  footer = document.createElement("footer");

  let footerContainer = document.createElement("div");
  footerContainer.setAttribute("id", "footerContainer");
  footer.appendChild(footerContainer);

  let zaanLogo = document.createElement("img");
  zaanLogo.setAttribute("src", "/img/ZAAN_Logo_Invert_NoText.svg");
  zaanLogo.setAttribute("height", "60px");
  zaanLogo.setAttribute("alt", "ZAAN Games Logo");
  zaanLogo.setAttribute("onerror", "this.src='./img/ZAAN_Logo_Invert_NoText_Small.png");
  footerContainer.appendChild(zaanLogo);

  let emailParagraph = document.createElement("p");
  var emailText = document.createTextNode("General @ Mytholympics.com");
  emailParagraph.appendChild(emailText);
  footerContainer.appendChild(emailParagraph);

  let copyrightHeader = document.createElement("h2");
  let copyrightText = document.createTextNode("ZAAN Games \u00A9 2018");
  copyrightHeader.appendChild(copyrightText);
  footerContainer.appendChild(copyrightHeader);

  document.body.append(footer);

  handleFooterPositioning();
}

function handleFooterPositioning() {
  if (footer) {
    let maxCoord = Math.max(window.innerHeight - 80, document.body.offsetHeight) - 80;
    footer.style.top = maxCoord + "px";
    footer.style.visibility = "visible";
  }
};

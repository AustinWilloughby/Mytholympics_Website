"use strict";

let footer;

//Creates the default footer to be used at the bottom of the page.
function createDefaultFooter() {
  footer = document.createElement("footer");

  let footerContainer = document.createElement("div");
  footerContainer.setAttribute("id", "footerContainer");
  footer.appendChild(footerContainer);

  let zaanLogo = document.createElement("img");
  zaanLogo.setAttribute("src", "/img/ZAAN/ZAAN_Logo_Invert_NoText.svg");
  zaanLogo.setAttribute("height", "60px");
  zaanLogo.setAttribute("alt", "ZAAN Games Logo");
  zaanLogo.setAttribute("onerror", "this.src='./img/ZAAN/ZAAN_Logo_Invert_NoText_Small.png");
  footerContainer.appendChild(zaanLogo);

  let emailParagraph = document.createElement("p");
  let emailText = document.createTextNode("General @ Mytholympics.com");
  emailParagraph.appendChild(emailText);
  footerContainer.appendChild(emailParagraph);

  let copyrightHeader = document.createElement("h2");
  let copyrightText = document.createTextNode("ZAAN Games \u00A9 2018");
  copyrightHeader.appendChild(copyrightText);
  footerContainer.appendChild(copyrightHeader);

  document.body.append(footer);

  handleFooterPositioning();
}

//Positions the footer at the bottom of the screen (if page is small) or at the bottom of
//the page if the page is longer.
function handleFooterPositioning() {
  if (footer) {
    let maxCoord = Math.max(window.innerHeight - 80, document.body.offsetHeight) - 80;
    footer.style.top = maxCoord + "px";
    footer.style.visibility = "visible";
  }
};

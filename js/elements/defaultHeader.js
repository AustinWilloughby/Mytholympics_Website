"use strict";


let header;
let navLinks = [];
const MAX_HEADER_SIZE = 2000;
const pagesAndLinks = [
  {
    name: "The Game",
    link: "./"
  },
  {
    name: "Media",
    link: "./media"
  },
  {
    name: "Dev Blog",
    link: "./blog"
  },
  {
    name: "About Us",
    link: "./about"
  },
  {
    name: "Press",
    link: "./presskit/index"
  },
];


//Creates the default header to be used at the top of the page.
function createDefaultHeader(currentPageName) {
  header = document.createElement("header");

  for (let i = 0; i < pagesAndLinks.length; i++) {
    let linkHeader = document.createElement("h1");
    navLinks.push(linkHeader);
    let tabText = document.createTextNode(pagesAndLinks[i].name);

    if (pagesAndLinks[i].name !== currentPageName) {
      let linkAnchor = document.createElement("a");
      if (window.location.href.includes("127.0.0") &&
        pagesAndLinks[i].name !== "The Game" &&
        pagesAndLinks[i].name !== "Press") {
        linkAnchor.setAttribute("href", pagesAndLinks[i].link + ".html");
      } else {
        linkAnchor.setAttribute("href", pagesAndLinks[i].link);
      }
      linkAnchor.setAttribute("class", "navLink");

      if (pagesAndLinks[i].name === "Press") {
        linkAnchor.setAttribute("target", "_blank");
      }

      linkHeader.append(linkAnchor);
      linkAnchor.append(tabText);

    } else {
      linkHeader.setAttribute("class", "currentPage");

      linkHeader.append(tabText);
    }

    header.append(linkHeader);
  }

  document.body.append(header);
};

function handleHeaderResize() {
  let bodyWidth = document.body.clientWidth;

  if (bodyWidth < MAX_HEADER_SIZE) {
    let marginSize = (bodyWidth / MAX_HEADER_SIZE) + "em";

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.marginLeft = marginSize;
      navLinks[i].style.marginRight = marginSize;
    }
  }
};

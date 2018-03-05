"use strict";

let header;
let pagesAndLinks = [
  {
    name: "The Game",
    link: "./"
  },
  {
    name: "Media",
    link: "./media.html"
  },
  {
    name: "Dev Blog",
    link: "./blog.html"
  },
  {
    name: "Presskit",
    link: "./presskit.html"
  },
  {
    name: "About Us",
    link: "./about.html"
  },
];


//Creates the default header to be used at the top of the page.
function createDefaultHeader(currentPageName) {
  header = document.createElement("header");

  for (let i = 0; i < pagesAndLinks.length; i++) {
    let linkHeader = document.createElement("h1");
    let tabText = document.createTextNode(pagesAndLinks[i].name);

    if (pagesAndLinks[i].name !== currentPageName) {
      let linkAnchor = document.createElement("a");
      linkAnchor.setAttribute("href", pagesAndLinks[i].link);
      linkAnchor.setAttribute("class", "navLink");
      linkHeader.append(linkAnchor);
      linkAnchor.append(tabText);

    } else {
      linkHeader.setAttribute("class", "currentPage");
      linkHeader.append(tabText);
    }

    header.append(linkHeader);
  }

  document.body.append(header);
}

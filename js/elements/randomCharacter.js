var charLinks = ["img/characters/aphrodite.png",
                  "img/characters/apollo.png",
                  "img/characters/artemis.png",
                  "img/characters/athena.png",
                  "img/characters/demeter.png",
                  "img/characters/hades.png",
                  "img/characters/poseidon.png",
                  "img/characters/zeus.png",
                 ];

function populateRandomCharacters() {
  let img1 = document.getElementById("firstRandomChar");
  let img2 = document.getElementById("secondRandomChar");
  let img3 = document.getElementById("thirdRandomChar");

  var index = Math.floor(Math.random() * charLinks.length);
  var link = charLinks[index];
  img1.src = link;
  img1.alt = link.split('/')[2].slice(0, -4);
  charLinks.splice(index, 1);

  var index = Math.floor(Math.random() * charLinks.length);
  link = charLinks[index];
  img2.src = link;
  img2.alt = link.split('/')[2].slice(0, -4);
  charLinks.splice(index, 1);

  var index = Math.floor(Math.random() * charLinks.length);
  link = charLinks[index];
  img3.src = link;
  img3.alt = link.split('/')[2].slice(0, -4);


  img1.style.visibility = "visible";
  img2.style.visibility = "visible";
  img3.style.visibility = "visible";
};

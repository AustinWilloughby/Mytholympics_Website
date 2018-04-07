const ASPECT_RATIO = 16 / 9;
const MAX_IMAGE_WIDTH = 900;

let topImage = document.getElementById("topImage");
let bottomImage = document.getElementById("bottomImage");
let imageStacker = document.getElementById("imageStacker");
let gallery = document.getElementById("imageGallery");
let leftButton = document.getElementById("galleryLeft");
let rightButton = document.getElementById("galleryRight");
let currentImageIndex = 0;
let autoAdvanceId;
let canAdvance = true;

const REQUIRED_SWIPE_OFFSET = 100;
let touchStartPos;

let imageLinks = ["presskit/images/beachBuffet.png",
                  "presskit/images/characterSelect.png",
                  "presskit/images/mainMenu.png",
                  "presskit/images/grappleball.png",
                  "presskit/images/pizzaParty.png",
                  "presskit/images/scoreScreen.png",
                  "presskit/images/shipSmash.png",
                  "presskit/images/teamSelection.png",
                  "presskit/images/torpedoTrouble.png"
                 ];

//IFFE for before page loads
((function () {
  shuffle(imageLinks);
  switchImage(0);
  topImage.onload = handleGalleryResize();
  autoAdvanceId = setInterval(autoAdvance, 4000);

  leftButton.onclick = function () {
    if (canAdvance === true) {
      canAdvance = false;
      switchImage(-1, 300);
      clearInterval(autoAdvanceId);
      autoAdvanceId = setInterval(autoAdvance, 4000);
    }
  };

  rightButton.onclick = function () {
    if (canAdvance === true) {
      canAdvance = false;
      switchImage(1, 300);
      clearInterval(autoAdvanceId);
      autoAdvanceId = setInterval(autoAdvance, 4000);
    }
  };


  gallery.addEventListener("touchstart", function (event) {
    leftButton.style.visibility = "hidden";
    rightButton.style.visibility = "hidden";
    if (event.touches.length === 1) {
      touchStartPos = event.touches.item(0).clientX;
    } else {
      start = null;
    }
  });

  gallery.addEventListener("touchend", function (event) {
    if (touchStartPos) {
      let end = event.changedTouches.item(0).clientX;

      if (end > touchStartPos + REQUIRED_SWIPE_OFFSET) {
        if (canAdvance === true) {
          canAdvance = false;
          switchImage(-1, 300);
          clearInterval(autoAdvanceId);
          autoAdvanceId = setInterval(autoAdvance, 4000);
        }
      } else if (end < touchStartPos - REQUIRED_SWIPE_OFFSET) {
        if (canAdvance === true) {
          canAdvance = false;
          switchImage(1, 300);
          clearInterval(autoAdvanceId);
          autoAdvanceId = setInterval(autoAdvance, 4000);
        }
      }
    }
  });

})());

function switchImage(advanceAmount, fadeSpeed) {
  currentImageIndex = (currentImageIndex + advanceAmount) % imageLinks.length;

  if (currentImageIndex < 0) {
    currentImageIndex = imageLinks.length + currentImageIndex;
  }

  $("#topImage").fadeOut(0);
  topImage.setAttribute("src", imageLinks[currentImageIndex]);

  $("#topImage").fadeIn(fadeSpeed, function () {
    bottomImage.setAttribute("src", imageLinks[currentImageIndex]);
    canAdvance = true;
  });
};

function autoAdvance() {
  switchImage(1, 500);
};

function handleGalleryResize() {
  let bodyWidth = document.body.clientWidth * 0.8;

  topImage.width = Math.min(MAX_IMAGE_WIDTH, bodyWidth);
  topImage.height = topImage.width / ASPECT_RATIO;

  bottomImage.width = topImage.width;
  bottomImage.height = topImage.height;

  imageStacker.style.width = (topImage.width + 10) + "px";
  imageStacker.style.height = (topImage.height + 10) + "px";

  gallery.style.width = (topImage.width + 10) + "px";

  leftButton.style.left = "10px";
  leftButton.style.top = ((topImage.height) / 2 - 25) + "px";
  rightButton.style.top = leftButton.style.top
  rightButton.style.left = topImage.width - 82 + "px";
};

//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(arr) {
  let j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
};

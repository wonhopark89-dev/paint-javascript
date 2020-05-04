const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  console.log(imgNumber);
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgImage"); // css 속성
  body.prepend(image);
}

function getRandom() {
  return Math.floor(Math.random() * IMG_NUMBER) + 1;
}
function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();

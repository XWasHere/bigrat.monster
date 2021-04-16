const chromaInterval = 1000;

let rat = document.getElementById("rat");
let hue = 0;

// random paste from mdn
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function updateRat() {
  rat.style = `filter: hue(${h}deg);`;
}

function doChroma() {
  let hue = getRandomInt(-360, 360);
  updateRat();
}

setInterval(doChroma, chromaInterval);

// Array and Object Notation Assignment
// Fifa Phattharinwararat
// March 5/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawBoard();
}

function drawBoard() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

      let x = i * 300;
      let y = j * 300;

      rect(x, y, 300, 300);
    }
  }

function () {

}
}
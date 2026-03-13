// reflex games

let x;
let y;
let w = 50;
let h = 50;
let score = 0;
let boxColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  moveBox();
  boxColor = color(255, 0, 0);
}

function draw() {
  drawBackground();
  drawBox();
  drawScore();
  mouseHit();
}

function drawBackground() {
  background(220);
}

function drawBox() {
  fill(boxColor);
  rect(x, y, w, h);
}

function drawScore() {
  fill(0);
  textSize(20);
  text("Score: " + score, 20, 30);
}

function mouseHit() {
  if ( mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    score += 1;
    moveBox();
    boxColor = color(random(255), random(255), random(255));
  }
}

function moveBox() {
  x = random(width - w);
  y = random(height - h);
}

function keyPressed() {
  if (key === "r") {
    score = 0;
    moveBox();
    boxColor = color(255, 0, 0);
  }
}
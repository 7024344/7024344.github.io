// reflex games

let boxX;
let boxY;
let boxSize = 50;
let score = 0;
let boxColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  resetGame();
}

function draw() {
  drawBackground();
  drawBox();
  drawScore();
  MouseHit();
}

function drawBackground() {
  background(220);
  
}

function drawBox() {
  fill(boxColor);
  rect(boxX, boxY, boxSize, boxSize);
}

function drawScore() {
  fill(0);
  textSize(20);
  text("Score: " + score, 20, 30);
}

function MouseHit() {
  if (mouseX > boxX && mouseX < boxX + boxSize && mouseY > boxY && mouseY < boxY + boxSize) {
    score++;
    moveBox();
  }
}

function moveBox() {
  boxX = random(width - boxSize);
  boxY = random(height - boxSize);
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    boxColor = color(random(255), random(255), random(255));
  }
  
  if (key === 'r' || key === 'R') {
    resetGame();
  }
}

function resetGame() {
  score = 0;
  boxColor = color(255, 0, 0);
  moveBox();
}
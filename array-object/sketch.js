// Array and Object Notation Assignment
// Fifa Phattharinwararat
// March 5/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let size = 600;
let use = size / 3;

let board = ["", "", "", "", "", "", "", "", ""];

let player = {current: "X"};

function setup() {
  createCanvas(size, size);
}

function draw() {
  background(220);
  drawGrid();
  drawXO();
}

function drawGrid() {
  for (let i = 1; i < 3; i++) {
    line(i * use, 0, i * use, size);
    line(0, i * use, size, i * use);
  }
}

function drawXO() {
  textSize(128);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < board.length; i++) {
    let x = (i % 3) * use + use / 2;
    let y = floor(i / 3) * use + use / 2;

    text(board[i], x, y);
  }
}

function mousePressed() {
  let drawX = floor(mouseX / use);
  let drawY = floor(mouseY / use);
  let index = drawX + drawY * 3;

  if (board[index] === "") {
    board[index] = player.current;

    if (player.current === "X") {
      player.current = "O";
    } 
    else {
      player.current = "X";
    }
  }
}
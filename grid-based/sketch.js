// Grid-Based Game
// Fifa Phattharinwararat
// March 26, 2026
//
// Extra for Experts:
// grid puzzle

const CELL_SIZE = 40;
const OPEN_ROAD = 0;
const CLOSE_ROAD = 1;
const PLAYER = 9;
let rows;
let cols;
let grid;
let thePlayer = {
  x: 0,
  y: 0,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = Math.floor(height/CELL_SIZE);
  cols = Math.floor(width/CELL_SIZE);
  grid = generateEmptyGrid(cols, rows);
  grid[thePlayer.y][thePlayer.x] = PLAYER;
  noStroke();
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  toggleCell(x, y);
}

function keyPressed() {
  if (key === "e") {
    grid = generateEmptyGrid(cols, rows);
    grid[thePlayer.y][thePlayer.x] = PLAYER;
  }
  // else if (ley === "p") {

  // }
  else if (key === "s") {
    movePlayer(thePlayer.x, thePlayer.y + 1);
  }
  else if (key === "w") {
    movePlayer(thePlayer.x, thePlayer.y - 1);
  }
  else if (key === "d") {
    movePlayer(thePlayer.x + 1, thePlayer.y);
  }
  else if (key === "a") {
    movePlayer(thePlayer.x - 1, thePlayer.y);
  }
}

function movePlayer(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows && grid[y][x] === OPEN_TILE) {
    thePlayer.x = x;
    thePlayer.y = y;

    grid[thePlayer.y][thePlayer.x] = PLAYER;
  }
}


function toggleCell(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (grid[y][x] === OPEN_ROAD) {
      grid[y][x] = CLOSE_ROAD;
    }
    else if (grid[y][x] === CLOSE_ROAD) {
      grid[y][x] = OPEN_ROAD;
    }
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === OPEN_ROAD) {
        fill("white");
      }
      else if (grid[y][x] === CLOSE_ROAD) {
        fill("black");
      }
      else if (grid[y][x] === PLAYER) {
        fill("green");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(OPEN_ROAD);
    }
  }
  return newGrid;
}
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
const BOXS = 5;
let rows;
let cols;
let grid;
let thePlayer = {
  x: 0,
  y: 0,
};
let theBoxs = {
  x: 2,
  y: 0,
};

// set up cods
function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = Math.floor(height/CELL_SIZE);
  cols = Math.floor(width/CELL_SIZE);
  grid = generateEmptyGrid(cols, rows);
  grid[thePlayer.y][thePlayer.x] = PLAYER;
  grid[theBoxs.y][theBoxs.x] = BOXS;
  noStroke();
}

// drawGird
function draw() {
  background(220);
  displayGrid();
}

// take out after cods done.
function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  toggleCell(x, y);

}

// key for move player and boxs
function keyPressed() {
  if (key === "e") {
    grid = generateEmptyGrid(cols, rows);
    grid[thePlayer.y][thePlayer.x] = PLAYER;
    grid[theBoxs.y][theBoxs.x] = BOXS;
  }
  else if (key === "s") {
    movePlayer(thePlayer.x, thePlayer.y + 1);
    //chackfunctions moveBoxs
    moveBoxs(theBoxs.x, theBoxs.y + 1);
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

// function for move player
function movePlayer(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows && grid[y][x] === OPEN_ROAD) {
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;

    thePlayer.x = x;
    thePlayer.y = y;
  
    grid[thePlayer.y][thePlayer.x] = PLAYER;

    grid[oldY][oldX] = OPEN_ROAD;
  }
}

// function for move boxs but not done
function moveBoxs(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows && grid[y][x] === OPEN_ROAD) {
    let oldX = theBoxs.x;
    let oldY = theBoxs.y;

    theBoxs.x = x;
    theBoxs.y = y;
  
    grid[theBoxs.y][theBoxs.x] = BOXS;

    grid[oldY][oldX] = OPEN_ROAD;
  }
}

// take out after cods done.
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

// setting grid
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
      else if (grid[y][x] === BOXS) {
        fill("yellow");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

// take out after cods done.
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

function at(dx, dy) {
  let newX = thePlayer.x + dx;
  let newY = thePlayer.y + dy;

  if (newX < 0 || newX >= cols || newY < 0 || newY >= rows) return;

  // Case 1: Empty space → move player
  if (grid[newY][newX] === OPEN_ROAD) {
    movePlayer(newX, newY);
  }

  else if (grid[newY][newX] === BOXS) {
    let boxNextX = newX + dx;
    let boxNextY = newY + dy;

    if (
      boxNextX >= 0 && boxNextX < cols &&
      boxNextY >= 0 && boxNextY < rows &&
      grid[boxNextY][boxNextX] === OPEN_ROAD
    ) {
      moveBoxs(boxNextX, boxNextY);
      movePlayer(newX, newY);
    }
  }
}
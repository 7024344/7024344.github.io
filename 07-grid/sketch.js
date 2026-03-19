// 
// 

// let theGrid = [[1, 0, 0, 0],
              //  [1, 0, 1, 0],
              //  [0, 1, 0, 0],
              //  [0, 0, 1, 1]];

// const SQUARE_DIMENSION = theGrid.length;

const SQUARE_DIMENSION = 10;
let theGrid;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height) {
    cellSize = height/SQUARE_DIMENSION;
  }
  else {
    cellSize = width/SQUARE_DIMENSION;
  }
  theGrid = randomizeGrid
}

function draw() {
  background(220);
  showGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  toggleCell(x, y);
}

function toggleCell(x, y) {
  if (theGrid[y][x] === 1) {
    theGrid[y][x] = 0;
  }
  else if (theGrid[y][x] === 0) {
    theGrid[y][x] = 1;
  }
}

function showGrid() {
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (theGrid[y][x] === 1) {
        fill("black");
      }
      else if (theGrid[y][x] === 0) {
        fill("while");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function randomizeGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid,push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[x].push(1);
      }
    }
  }
}
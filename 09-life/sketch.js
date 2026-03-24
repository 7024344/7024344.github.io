// 2d rectangular grid demo

const CELL_SIZE = 20;
const RENDER_OM_FRAME_MULTIPLE = 3;
const DEAD_CELL = 0;
const LIVE_CELL = 1;
let autoPlayIsOn = false;
let rows;
let cols;
let grid;
let gosper;

function perload() {
  gosper = loadJSON("gosper.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = Math.floor(height/CELL_SIZE);
  cols = Math.floor(width/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background(220);
  if (autoPlayIsOn && frameCount % RENDER_OM_FRAME_MULTIPLE === 0) {
    grid = takeTurn();
  }
  displayGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  //self
  toggleCell(x, y);
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(cols, rows);
  }
  else if (key === "e") {
    grid = generateEmptyGrid(cols, rows);
  }
  else if (key === " ") {
    grid = takeTurn();
  }
  else if (key === "a") {
    autoPlayIsOn = !autoPlayIsOn;
  }
  else if (key === "g") {
    grid = gosper;
  }
}

function takeTurn() {
  let nextTurn = generateEmptyGrid(cols, rows);

  //look at every cell
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let neigbours = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          //don't fall off the edge of the grid
          if (x+i >= 0 && x+i < cols && y+j >= 0 && y+j < rows) {
            neigbours += grid[y+j][x+i];
          }
        }
      }

      //fon't count self as neighbour
      neigbours -= grid[y][x];

      //apply the rules
      if (grid[y][x] === LIVE_CELL) {
        //currently alive
        if (neigbours === 2 || neigbours === 3) {
          nextTurn[y][x] = LIVE_CELL;
        }
        else {
          nextTurn[y][x] = DEAD_CELL;
        }
      }

      if (grid[y][x] === DEAD_CELL) {

        if (neigbours === 3) {
          nextTurn[y][x] = LIVE_CELL;
        }
        else {
          nextTurn[y][x] = DEAD_CELL;
        }
      }
    }
  }
  return nextTurn;
}

function toggleCell(x, y) {
  //make sure the cell you're toggling is in the grid
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (grid[y][x] === DEAD_CELL) {
      grid[y][x] = LIVE_CELL;
    }
    else if (grid[y][x] === LIVE_CELL) {
      grid[y][x] = DEAD_CELL;
    }
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === DEAD_CELL) {
        fill("white");
      }
      else if (grid[y][x] === LIVE_CELL) {
        fill("black");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}
// image Demo
let carImg;

function preload() {
  carImg = loadImage("car.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(carImg, mouseX, mouseY, carImg.width * 0.5, carImg.height * 0.5);
}

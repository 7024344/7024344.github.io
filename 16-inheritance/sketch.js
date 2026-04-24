// OOP Inheritance Demo

let myCar;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //myCar = new Vehicle("car", "kona");
  myCar = new Car("Kona");

  console.log(myCar.getName());
  console.log(myCar.getType());
}

function draw() {
  background(220);
}


class Vehicle {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}

class Car extends Vehicle {
  constructor(name) {
    super("car", name);
  }

  getName() {
    return "This is a car called" + super.getName();
  }
}
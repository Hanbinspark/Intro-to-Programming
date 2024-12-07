class DynamicShape {
  constructor(x, y, z, diameter, speed) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.diameter = diameter;
    this.speed = speed; 
  }

  
  update(counter) {
    this.z += this.speed * counter; 
    this.diameter -= 0.1; 
    if (this.diameter < 100) this.diameter = 500; 
  }


  display(counter, angleStep) {
    push();
    rotateY(counter * this.speed); 
    for (let angle = 0; angle < radians(360); angle += angleStep) {
      let x = this.diameter / 2 * cos(angle);
      let y = this.diameter / 2 * sin(angle);
      strokeWeight(random(2, 5));
      stroke(random(100, 255), random(100, 200), 255 - counter);
      if (counter > round(random(16, 25))) noFill();
      else fill(random(100, 255), random(50, 150), 200, 150);
      ellipse(x, y, 15 + counter * 5, 15 + counter * 5); 
    }
    pop();
  }
}


let shapes = [];
let counter = 0;

function setup() {
  createCanvas(800, 800, WEBGL);
  background(0);

  
  for (let i = 0; i < 3; i++) {
    shapes.push(
      new DynamicShape(0, 0, -1500 + i * 500, 500, random(0.01, 0.03))
    );
  }
}

function draw() {
  counter += 0.05;
  background(0, 20); 

  translate(0, 200, -1000);
  rotateX(PI / 4 + counter * 0.1); // Slow rotation
  rotateZ(counter * 0.2);

  for (let shape of shapes) {
    shape.update(counter);
    shape.display(counter, radians(360 / 50)); 
  }

  
  push();
  rotateY(PI);
  for (let shape of shapes) {
    shape.update(counter); 
    shape.display(counter, radians(360 / 50)); 
  }
  pop();
}

/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {

  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new MediocreDancer(width / 2, height / 2);
}

function draw() {

  background(0);
  drawFloor();

  dancer.update();
  dancer.display();
}

class MediocreDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.angle = 0;
    this.size = random(50, 100);
    this.color = (random(255), random(255), random(255));
    this.leglength = random(30, 50);
    this.armlength = random(20, 40);
    this.spinspeed = random(0.01, 0.05);
    this.mouseEffectRange = 150;
  }
  update() {
    this.angle += this.spinspeed;
    this.y += sin(this.angle) * 2;
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.mouseEffectRange) {

      this.color = color(random(255), random(255), random(255));
      this.size = random(50, 100);

    }


  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(this.color);
    ellipse(0, 0, this.size * 0.5, this.size * 0.7);
    fill(255);
    ellipse(0, -this.size * 0.5, this.size * 0.2, this.size * 0.2);
    stroke(255);
    line(-this.armlength, 0, this.armlength, 0);
    line(-this.leglength * 0.5, this.size * 0.3, -this.leglength, this.size);
    line(this.leglength * 0.5, this.size * 0.3, this.leglength, this.size);

    pop();
  }
}
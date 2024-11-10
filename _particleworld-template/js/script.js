
let colors = ["#fcba03", "#0046b0", "#b00058", "#b0a700"];
let p = [];

function setup() {
  createCanvas(600, 600);
  background(240);

  for (let j = 0; j < 20; j++) {

    let np = new Particle(0, 0, random(20, 100));

    p.push(np);
  }
  frameRate(200);
  noStroke();
}

function draw() {
  background(250, 10);

  for (let j = 0; j < p.length; j++) {
    p[j].drawParticle();
    p[j].updateParticle();
    if (p[j].isDead()) {
      p.splice(j, 1);
      let np = new Particle(0, 0, random(20, 100));
      p.push(np);
    }
  }
}

class Particle {

  constructor(xx, yy, zz) {
    let speed = 5;
    this.x = xx;
    this.y = yy;
    this.d = zz;
    this.c = random(colors)
    this.dx = random(-speed, speed);
    this.dy = random(-speed, speed);
    this.lifetime = random(10, 500);
  }

  drawParticle() {
    fill(this.c);
    circle(this.x, this.y, this.d);
  }

  updateParticle() {
    this.x += this.dx;
    this.y += this.dy;
    this.lifetime -= 1;

    this.vy += 0.05;
    this.vy += 0.05

    if (this.x > width || this.x < 0) this.dx *= -1;
    if (this.y > height || this.y < 0) this.dy *= -1;
  }

  isDead() {
    return (this.lifetime < 0);
  }



}














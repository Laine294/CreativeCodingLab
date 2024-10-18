function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5_canvas_container");
}

function draw() {
    background(220);
    circle(mouseX, mouseY, 20);
}
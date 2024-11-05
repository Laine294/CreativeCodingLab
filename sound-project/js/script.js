function setup() {
    let canvas = createCanvas(500, 400);
    canvas.parent("p5-canvas-container");
}

let sound;

function preload() {
    sound = loadSound("assets/song.mp3");
}

function draw() {
    background(0);
    // let vol = map(mouseY, 0, height, 0.0, 1.0, true);
    // sound.setVolume(vol);

    let panVal = map(mouseX, 0, width, 1.0, -1.0, true);
    sound.pan(panVal);

    let rateVal = map(mouseY, 0, height, 0.1, 1.5, true);
    sound.rate(rateVal);
}

function mouseClicked() {
    if (sound.isPlaying() == false) {
        sound.play();
    }
}
var blobs = [];
var colors;
let variation = 0;
let xScale, yScale, centerX, centerY;

let changeDuration = 3000;
let lastChange = 0;

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.id("p5-canvas")
    textAlign(CENTER, CENTER);

    xScale = width / 20;
    yScale = (height / 20) * (width / height);

    centerX = width / 2;
    centerY = height / 2;

    colors = [
        color("#510000"),
        color("#740000"),
        color("#9f3434"),
        color("#ff7676"),
        color("#ffa5a5"),
    ];
}

function draw() {
    if (mouseIsPressed) {
        for (let i = 0; i < 20; i++) {
            let x = mouseX + random(-100, 100);
            let y = mouseY + random(-100, 100);
            var blob = {
                x: getXPos(x),
                y: getYPos(y),
                size: random(1, 5),
                lastX: x,
                lastY: y,
                color: colors[floor(random(colors.length))],
                direction: random(0.1, 1) * (random() > 0.5 ? 1 : -1),
            };
            blobs.push(blob);
        }
    }

    var length = blobs.length;
    if (length == 0) {
        background("#9F2B68");
        noStroke();
        fill(255);
        textSize(40);
        text("Just Dance ", centerX, centerY);
        return;
    }

    noStroke();
    fill(26, 6, 51, 10);
    rect(0, 0, width, height);

    let time = millis();
    if (time - lastChange > changeDuration) {
        lastChange = time;
        variation++;
        if (variation > 11) variation = 0;
    }

    var stepsize = deltaTime * 0.002;
    for (var i = length - 1; i >= 0; i--) {
        let blob = blobs[i];

        var x = getSlopeX(blob.x, blob.y);
        var y = getSlopeY(blob.x, blob.y);
        blob.x += blob.direction * x * stepsize;
        blob.y += blob.direction * y * stepsize;

        x = getXPrint(blob.x);
        y = getYPrint(blob.y);
        stroke(blob.color);
        strokeWeight(blob.size);
        line(x, y, blob.lastX, blob.lastY);
        blob.lastX = x;
        blob.lastY = y;

        const border = 200;
        if (
            x < -border ||
            y < -border ||
            x > width + border ||
            y > height + border
        ) {
            blobs.splice(i, 1);
        }
    }
}

function getSlopeY(x, y) {
    switch (variation) {
        case 0:
            return Math.sin(x);
        case 1:
            return Math.sin(x * 5) * y * 0.3;
        case 2:
            return Math.cos(x * y);
        case 3:
            return Math.sin(x) * Math.cos(y);
        case 4:
            return Math.cos(x) * y * y;
        case 5:
            return Math.log(Math.abs(x)) * Math.log(Math.abs(y));
        case 6:
            return Math.tan(x) * Math.cos(y);
        case 7:
            return -Math.sin(x * 0.1) * 3; //orbit
        case 8:
            return (x - x * x * x) * 0.01; //two orbits
        case 9:
            return -Math.sin(x);
        case 10:
            return -y - Math.sin(1.5 * x) + 0.7;
        case 11:
            return Math.sin(x) * Math.cos(y);
    }
}

function getSlopeX(x, y) {
    switch (variation) {
        case 0:
            return Math.cos(y);
        case 1:
            return Math.cos(y * 5) * x * 0.3;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 1;
        case 7:
            return Math.sin(y * 0.1) * 3; //orbit
        case 8:
            return y / 3; //two orbits
        case 9:
            return -y;
        case 10:
            return -1.5 * y;
        case 11:
            return Math.sin(y) * Math.cos(x);
    }
}

function getXPos(x) {
    return (x - centerX) / xScale;
}
function getYPos(y) {
    return (y - centerY) / yScale;
}

function getXPrint(x) {
    return xScale * x + centerX;
}
function getYPrint(y) {
    return yScale * y + centerY;
}

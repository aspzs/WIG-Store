function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
}

function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    // If it's not a letter key, clear the screen
    background(random(200,255));
  } else {
    // It's a letter key, fill a rectangle
    randFill_r = random(180,220);
    fill(randFill_r, 220, 220);
    rect(random(windowWidth+2), 0, random(windowWidth+10), windowHeight);
  }
}

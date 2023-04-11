let ball;
  
let x = 0;
let y = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    x += (mouseX - x) * 0.04;
    y += (mouseY - y) * 0.04;
    fill(0);
    //Bola 1
    ellipse(x, y, random(50), random(50));
    //Bola 2
    ellipse(x+50, y+50, 50, 50);
    //Bola 3
    ellipse(x+100, y, 50, 50);
    //Bola 4
    ellipse(x+150, y+50, random(25), random(25));
    //Bola 5
    ellipse(x+200, y, 50, 50);
}
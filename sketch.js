function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('green');
  fill('black');
  ellipse(mouseX, mouseY, 40, 40);

  fill('white');
  text("hello", 200, 200);
  textSize(100);
}
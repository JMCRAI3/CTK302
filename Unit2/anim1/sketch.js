
let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background (100);
  textSize (128);
  text("BOOOOOO!!!!", x, 200,);
  x += 5;
  if (x>width) {
    x= -500;
  }
}

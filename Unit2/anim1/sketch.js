
let x = 0;
let f1 ;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont ("Assets/Smiley.ttf")
}

function draw() {
  background (100);
  textFont (f1, 128);
  text("BOOOOOO!!!!", x, 200,);
  x += 5;
  if (x>width) {
    x= -500;
  }
}

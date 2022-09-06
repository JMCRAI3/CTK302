let i1, i2, i3 ;

function setup() {
  createCanvas(500, 500);
  i1 = loadimage("chococake.png");
  i2 = loadimage("horsebackriding.png");
  i3 = loadimage("painting.jpg");
  imageMode(CENTER);
}

function draw() {
image(i1, width/2, height/2-120, 100, 100);
image(i2, width/2, height/2, 100, 100);
image(i3, wideth/2, height/2+120, 100, 100);
}

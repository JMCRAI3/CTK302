///<reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let i1, i2, i3 ;

function setup() {
  createCanvas(500, 500);
  i1 = loadImage("chococake.png");
  i2 = loadImage("horsebackriding.png");
  i3 = loadImage("painting.jpg");
  imageMode(CENTER);
}

function draw() {
image(i1, width/2, height/2-120, 100, 100);
image(i2, width/2, height/2, 100, 100);
image(i3, wideth/2, height/2+120, 100, 100);
}

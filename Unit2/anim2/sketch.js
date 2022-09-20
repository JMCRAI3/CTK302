let x = 0;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background (100);
translate(x, 0) ;
  avatar() ;
  x += 5; 
  if (x > width) {
    x = -300;
  }
}


function avatar() {

  fill("red");
  ellipse(387, 187, 100, 100);
  ellipse(391, 245, 100, 100);

}



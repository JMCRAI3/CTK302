let state = 0;
let timer = 0;
let i1, i2, i3 ;
let f1 ;

function setup() {
  createCanvas(500, 500);
  i1 = loadImage("Assets/BabyBolin.JPG");
  i2 = loadImage("Assets/YoungBolin.JPG");
  i3 = loadImage("Assets/BolinGradPhoto.JPG");
  imageMode(CENTER);

  f1 = loadFont("Assets/Smiley.ttf");
  textAlign(CENTER);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("green");

      image(i1, width/2, height/2-120, 250, 250);

      fill("black");
      textFont(f1, 30);
      text("This is a photo of the first time I ever met Bolin.", width/2, 400);

      // put image and text

      timer++;
      if (timer > 5 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      background("#2196F3");

      image(i2, width/2, height/2-130, 250, 250);

      fill("black");
      textFont(f1, 30);
      text("This is Bolin when I got to bring him home.", width/2, 400);

      // put image and text

      timer++;
      if (timer > 6 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      background("#E91E63");

      image(i3, width/2, height/2-130, 250, 250);

      fill("black");
      textFont(f1, 30);
      text("This is Bolin's graduation photo from puppy school.", width/2, 400);

      // put image and text

      timer++;
      if (timer > 7 * 60) {
        timer = 0;
        state = 0;
      }

      break;
  }
}
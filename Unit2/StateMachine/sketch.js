let state = 0;
let timer = 0;
let f1;
let i1, i2, i3 ;

function setup() {
  createCanvas(800, 800);
  f1 = loadFont("Assets/Smiley.ttf");
  i1 = loadImage("Assets/Aphrodite.JPG");
  i2 = loadImage("Assets/Felix.JPG");
  i3 = loadImage("Assets/Ash.JPG");
  imageMode(CENTER);
}

function draw() {

  switch (state) {

    case 0:
      background (176, 32, 167);
      fill('black');
      textFont(f1, 70);
      text("Exotic Animals I have owned.", 100, 400);
      timer++;
      if(timer > 200) {
        state = 1;
        timer = 0;
      }
      break;

    case 1:
      background(245, 55, 185);
      text("Bearded Dragon: Aphrodite", 100, 100);
      image(i1, width/2, height/2, 300, 400);

      timer++;
      if(timer > 200){
        state = 2;
        timer = 0;
      }
      break;

    case 2:
      background(225, 167, 75);
      text("Guinea Pig: Felix", 100, 100);
      image(i2, width/2, height/2, 300, 400);

      timer++;
      if(timer > 200){
        state = 3;
        timer = 0;
      }
      break;

      case 3:
        background(75, 124, 202);
        text("Syrian Hamster: Ash", 100, 100);
        image(i3, width/2, height/2, 300, 400);

        timer++;
        if(timer > 200){
          state = 4;
          timer = 0;
        }
        break;
  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}

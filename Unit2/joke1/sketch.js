let state = 0 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER) ;
}

function draw() {
  switch (state) {
   case 0 :
      background("red") ;
      text("Why does Princess Leia keep her hair tied up in buns?", width / 2, height / 2) ;
       break ;

    case 1:
      background("blue") ;
      text("So it doesn't Hang Solow.", width / 2, height / 2) ;
      break ;
  }
}

function mouseReleased() {
state++ ;
if (state > 1) state = 0 ;
}

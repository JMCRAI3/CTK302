let numberOfTouches ;
let i1, i2, i3;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("Assets/beagle.jpg");
  i2 = loadImage("Assets/jackrussel.jpg");
  i3 = loadImage("Assets/pug.jpg");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("No Licks", 5, 22) ; 
      break ;
      
      case 1: 
       text("One Lick", 5, 22) ; 
       image(i1,width/2, height/2, 100, 100);
      // put a picture here
      break ;
      
      case 2:
      text("Two Licks", 5, 22) ; 
      image(i2,width/2, height/2, 100, 100);
            // put a picture here
      break ;
      
      case 3:
     text("Three Licks", 5, 22) ; 
     image(i3,width/2, height/2, 100, 100);
            // put a picture here
      break ;
    
      
  }
  
}
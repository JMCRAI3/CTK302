let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("#FF8100");
      //text("case 0", 100, 100);
        for (let j = 0; j <= height; j += 45) {
    //i++ means i=i+1 not i+1
    for (let i = 0; i <= width; i += 1) {
      // print (i) ; ~can put print or random shape~
      fill("black")
      rect(i, j, 20, 20);
    }
  }
      break;

    case 1:
      background("rgb(58,5,58)");
      //text("case 1", 100, 100);
        for (let j = 0; j <= height; j += 25) {
    //i++ means i=i+1 not i+1
    for (let i = 0; i <= width; i += 30) {
      // pri#FFEB3B; ~can put print or random shape~
      fill("#F5E876")
      ellipse(i, j, 25, 25);
    }
  }
      break;
    case 2:
      background("orange");
      //text("case 2", 100, 100);
        for (let j = 0; j <= height; j += 25) {
    //i++ means i=i+1 not i+1
    for (let i = 0; i <= width; i += 40) {
      // print (i) ; ~can put print or random shape~
      fill("rgb(68,255,0)")
      rect(i, j, 20, 20);
    }
  }
      break;
      case 3:
      background("rgb(255,255,107)");
      //text("case#FFC107);
        for (let j = 0; j <= height; j += 25) {
    //i++ means i=i+1 not i+1
    for (let i = 0; i <= width; i += 25) {
      // print (i) ; ~can put print or random shape~
      triangle(i, j, 20, 20);
    }
  }
      break;
    case 4:
      background("black");
      //text("case#9E9E9E);
        for (let j = 0; j <= height; j += 25) {
    //i++ means i=i+1 not i+1
    for (let i = 0; i <= width; i += 25) {
      // print (i) ; ~can put print or random shape~
      fill("purple")
      ellipse(i, j, 30, 30);
    }
  }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}

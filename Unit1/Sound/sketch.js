let funday ;

function preload() {
  funday = loadSound("Assets/funday.mp3");
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  funday.play() ;
}

function draw() {
  background("black");
  fill("white");

}


function touchStarted() {
  getAudioContext().resume();
}

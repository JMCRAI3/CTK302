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
  text("The name is Funday and I like it because it has a really good beat", 100, 100, 400, 400);


}

function mouseReleased(){
  if (funday.isPlaying()) {
    funday.pause() ;
  } else {
    funday.play() ;
  }
}

function touchStarted() {
  getAudioContext().resume();
}

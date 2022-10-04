let state = -1;
let s1, s2, s3 ;


function preload() {
  s1 = loadSound("Assets/creativeminds.mp3") ;
  s2 = loadSound("Assets/evolution.mp3") ;
  s3 = loadSound("Assets/ukulele.mp3") ;
}


function setup() {
  createCanvas(800, 800);
}

function draw() {

  background(100);
  
  switch (state) {

    case -1:
      text("Please Click To Start", 100, 100);
      break;

    case 0:
      background(0,0,100);
      text("Creative Minds", 100, 100);
      if (!s1.isPlaying()){
        s1.play() ;
      }
      break;

    case 1:
      background(100,0,0);
      text("Evolution", 100, 100);
      if (!s2.isPlaying()){
        s2.play() ;
      }
      break;

    case 2:
      background(50,0,50);
      text("Ukulele", 100, 100);
      if (!s3.isPlaying()){
        s3.play() ;
      }
      break;

  }
}

function mouseReleased() {
  s1.stop() ;
  s2.stop() ;
  s3.stop() ;
  state++;
  if (state > 2) state = 0;

}

function touchStarted() {
  getAudioContext().resume();
}


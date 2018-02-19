var mySound1;
var mySound2;
var mySound

function preload() {
  mySound1 = loadSound( 'asset/francisco-tarrega-lagrima.mp3');
	mySound2 = loadSound( 'asset/mozart-horn-concerto4-3-rondo.mp3');
	}




function setup() { 
  mySound1.setVolume(0.1);
  mySound1.play();
  mySound2.setVolume(0.1);
  mySound2.play();
  createCanvas(100, 100);
}

function draw() {
  if (mySound1.isPlaying() || mySound2.isPlaying()) {
    background(240);
  } else {
    background(120);
  }
}

function keyPressed() {
 print(key); 
  if(key =='P') {
   mySound1.play();
    mySound2.stop();
 }
if(key =='T') {
   mySound2.play();
   mySound1.stop();
}if(key ==' ') {
   mySound2.stop();
   mySound1.stop();
}
}

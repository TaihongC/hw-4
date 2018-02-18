var freqA = 250;
var freqS = 350;
var freqD = 450;
var freqF = 550;
var freqQ = 650;
var freqW = 750;
var freqE = 850;
var freqR = 950;


var oscA, oscS, oscD, oscF, oscQ, oscW, oscE, oscR;

var playing = false;

function setup() {
  createCanvas(600,600);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
  oscQ = new p5.Oscillator();
  oscQ.setType('triangle');
  oscQ.freq(freqQ);
  oscQ.amp(0);
  oscQ.start();
  
  oscW = new p5.Oscillator();
  oscW.setType('triangle');
  oscW.freq(freqW);
  oscW.amp(0);
  oscW.start();
  
  oscE = new p5.Oscillator();
  oscE.setType('triangle');
  oscE.freq(freqE);
  oscE.amp(0);
  oscE.start();
  
  oscR = new p5.Oscillator();
  oscR.setType('triangle');
  oscR.freq(freqR);
  oscR.amp(0);
  oscR.start();
  

}

function draw() {
  if (playing) {

    if (keyIsPressed && mouseIsPressed) {
      fill(random(255), random(255), random(255));
			ellipse(random(100), random(100), 10, 10);
    }
  }
  text('click here,then\n press A/S/D/F/\nQ/W/E/R/\n keys to play', width / 2, 128);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    background(255, 0, 0);
  } else if (key == 'S') {
    osc = oscS;
    background(255, 165, 0);
  } else if (key == 'D') {
    osc = oscD;
    background(255, 255, 0);
  } else if (key == 'F') {
    osc = oscF;
    background(0, 128, 0);
  } else if (key == 'Q') {
  	osc = oscQ;
    background(124, 252, 0);
  } else if (key == 'W') {
    osc = oscW;
    background(0, 255, 255);
  } else if (key == 'E') {
    osc = oscE;
    background(0, 0, 255);
  } else if (key == 'R') {
    osc = oscR;
    background(255, 0, 255);
  
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    background(255, 255, 255);
  } else if (key == 'S') {
    osc = oscS;
    background(255, 255, 255);
  } else if (key == 'D') {
    osc = oscD;
    background(255, 255, 255);
  } else if (key == 'F') {
    osc = oscF;
    background(255, 255, 255);
  } else if (key == 'Q') {
  	osc = oscQ;
    background(255, 255, 255);
  } else if (key == 'W') {
    osc = oscW;
    background(255, 255, 255);
  } else if (key == 'E') {
    osc = oscE;
    background(255, 255, 255);
  } else if (key == 'R') {
    osc = oscR;
    background(255, 255, 255);
  } 
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}

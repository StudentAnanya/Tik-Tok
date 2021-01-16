var hr, hrAngle;
var min, minAngle;
var sec, secAngle;
var centre;

function setup() {
  createCanvas(600,600);

}

function draw() {
  background("black");  

  translate(300,300);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  hrAngle = map(hr % 12, 0, 12, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  secAngle = map(sec, 0, 60, 0, 360);

  push();
  rotate(hrAngle);
  strokeWeight(8);
  stroke(0,0,255);
  line(0,0,50,0);
  pop();

  push();
  rotate(minAngle);
  strokeWeight(8);
  stroke(0,255,0);
  line(0,0,75,0);
  pop();

  push();
  rotate(secAngle);
  strokeWeight(8);
  stroke(255,0,0);
  line(0,0,100,0);
  pop();

  strokeWeight(9);
  noFill();

  stroke(0,0,255);
  arc(0,0,360, 360,0,hrAngle);

  stroke(0,255,0);
  arc(0,0,380,380,0,minAngle);
  
  stroke(255,0,0);
  arc(0,0,400,400,0,secAngle);
  
  drawSprites();
}
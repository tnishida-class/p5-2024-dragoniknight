let x, y, vy,a,b;
const g = 1;
const vyMax = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight-75;
  vy = 2;
  a = windowWidth;
  b = windowHeight;
}

function draw(){
  background(150,255,255);
  fill(220,200,0)
  strokeWeight(3)
  rect(0,windowHeight-50,windowWidth,100)
  fill(255,0,0)
  ellipse(x, y, 50);
  fill(255)
  textSize(30)
  noStroke()
  text("M",x-13,y+10)
  fill(255,255,0)
  stroke(2)
  rect(a,b-250,50)
　fill(255)
　textSize(40)
  stroke(2)
  text("？",a+5,b-210)
  y+= vy;
  vy+= g*1/100;
  vy = constrain(vy, vyMax, -vyMax);
  y = constrain(y, 0, height-75);
  let i=0
  if(keyIsDown("A".charCodeAt(0))){ i = 1.5; }
  if(keyIsDown("Z".charCodeAt(0))){ i = -0.5; }
  if(keyIsDown(LEFT_ARROW)){ a += (i+1)*10; }
  if(keyIsDown(RIGHT_ARROW)){ a -= (i+1)*10; }
}
function keyPressed(){
  if(y==height-75){
   if(keyIsDown(" ".charCodeAt(0))){ y-= vy*10; vy-= -g*1/100}
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
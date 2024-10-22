let x, y, vy,a,b;
const g = 1;
const vyMax = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight-125;
  vy = 2;
  a = windowWidth;
  b = windowHeight;
}

function draw(){
  background(200);
  fill(150)
  strokeWeight(3)
  rect(0,windowHeight-100,windowWidth,100)
  fill(50)
  ellipse(x, y, 50);
  fill(100)
  rect(a,b-300,50)
　fill(255)
　textSize(30)
  text("？",a+10,b-265)
  y+= vy;
  vy+= g*1/100;
  vy = constrain(vy, vyMax, -vyMax);
  y = constrain(y, 0, height-125);
  let i=0
  if(keyIsDown("A".charCodeAt(0))){ i = 1.5; }
  if(keyIsDown("Z".charCodeAt(0))){ i = -0.5; }
  if(keyIsDown(LEFT_ARROW)){ a += (i+1)*10; }
  if(keyIsDown(RIGHT_ARROW)){ a -= (i+1)*10; }
}
function keyPressed(){
  if(y==height-125){
   if(keyIsDown(" ".charCodeAt(0))){ y-= vy*10; vy-= -g*1/100}
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

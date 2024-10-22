let x, y, vy;
const g = 1;
const vyMax = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = windowHeight-125;
  vy = 2;
}

function draw(){
  background(200);
  fill(150)
  strokeWeight(3)
  rect(0,windowHeight-100,windowWidth,100)
  fill(50)
  ellipse(x, y, 50);
  y+= vy;
  vy+= g*1/100;
  vy = constrain(vy, vyMax, -vyMax);
  y = constrain(y, 0, height-125);
  let i=0
  if(keyIsDown("A".charCodeAt(0))){ i = 1; }
  if(keyIsDown(LEFT_ARROW)){ x -= (i+1)*10; }
  if(keyIsDown(RIGHT_ARROW)){ x += (i+1)*10; }
}
function keyPressed(){
  if(y>=height-125){
   if(keyIsDown(" ".charCodeAt(0))){ y-= vy*10; vy-= -g*1/100}
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

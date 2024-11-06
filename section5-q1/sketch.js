function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love Mrs.Green Apple");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  noStroke()
  fill(0,255,0);
  ellipse(width/2, height/2, w + p * 10, h + p * 10);
  fill(255,0,0);
  text(t, width/2-65, height/2+5);
  let x = width/2-60
  let y = height/2+15
  fill(0,255,0)
  triangle(x,y,x-10,y+10,x+50,y-10)
}

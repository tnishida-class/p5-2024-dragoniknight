function setup(){
  createCanvas(400, 400);
  background(240);

  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100);
  }

  const n = 10;
  for(let i = 0; i < n; i++){
   line(0, height * i / n, width, height * i / n); 
  }

  fill(0);
  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    let x = i * dx+10;
    let y = height - h;
    ellipse(x,y,5);
    if(i > 0){
      let px = (i-1) * dx+10;
      let py =height - height * scores[(i-1)] / 100;
      line(px,py,x,y) 
    }
  }
}

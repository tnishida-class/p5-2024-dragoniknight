function setup(){
  createCanvas(400, 400);
  background(240);
  
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100);
  }

  let total = 0;
  for(let i = 0; i < scores.length; i++){
    total += scores[i]; 
  }
  
  const cx = width/2;
  const cy = height/2;
  let sum = scores[0];
  for(let i = 0; i < scores.length; i++){
    if(i == 0){
      let R = random(0,255)
      let G = random(0,255)
      let B = random(0,255)
      let S = TWO_PI / total * scores[0];
      fill(R,G,B)
      arc(cx,cy,200,200,HALF_PI+PI,HALF_PI+PI+S);
    }
      let R = random(0,255)
      let G = random(0,255)
      let B = random(0,255)
      let start = TWO_PI / total * sum;
      sum += scores[(i+1)]
      let stop = TWO_PI / total * sum;
      fill(R,G,B)
      arc(cx,cy,200,200,HALF_PI+PI+start,HALF_PI+PI+stop,PIE)
    }
}
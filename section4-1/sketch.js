function setup(){
  createCanvas(400, 400);
  background(240);

  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100);
  }
  console.log(scores);

  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum);

  let average, largest, smallest;
  average = sum / scores.length

  largest = 0;
  for(let i = 0; i < scores.length; i++){
    if (largest < scores[i]) {
      largest = scores[i];
    }
  }
  console.log(largest); 

  smallest = 100;
  for(let i = 0; i < scores.length; i++){
    if (smallest > scores[i]) {
      smallest = scores[i];
    }
  }
  console.log(smallest); 

  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
  
  noStroke();
  
  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    if (scores[i] === largest) {
      fill(255, 0, 0);
    } else if (scores[i] === smallest) {
      fill(0, 0, 255);
    } else {
      fill(122);
    }
    rect(i * dx + 2, height - h, dx - 4, h);
    fill(0);
    text(scores[i].toPrecision(3), i * dx, height - h);
  }

  fill(0,255,0);
  rect(0,height-height * average /100,width,2)
  fill(0);
  text(average.toPrecision(3),0,height-height * average /100 )
}
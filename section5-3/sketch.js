function setup(){
  createCanvas(500, 500);
  daysInYear(2003);
  dayOfWeek(2024, 11, 5)
  calendar(2024,2)

  for(let i = 2003; i <= 2024; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  rect(50,0,350,50)
  text(m+"月",210,30)
  for(let b = 0; b < 7; b++){
   for(let c = 0; c < 6; c++){
    if(1<=b && b<=5){
     fill(255)
     rect(50+b*50,50,50,25)
     rect(50+b*50, 75+c*50, 50)
    }
    if(b == 0){
     fill(255,100,100)
     rect(50,50,50,25)
     fill(255,200,200)
     rect(50+b*50, 75+c*50, 50)
    }
    if(b == 6){
     fill(100,100,255)
     rect(350,50,50,25)
     fill(200,200,255)
     rect(50+b*50, 75+c*50, 50)
    }
   }
  }
  let p = 0
  for(let d = 1; d <= daysInMonth(y, m); d++){
   let dow = dayOfWeek(y, m, d);
   if(dow == 0 && d>=2){
     p = p+1
   }
   fill(0)
   text(d,55+dow*50,90+p*50)
   text(dayOfWeekAsString(dow),70+dow*50,67)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  for(let y = 2003; y <= 2024; y++){
   if(isLeapYear(y)){
    return 366 
   }
   else{
    return 365
   }
  }
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  let x = 1
  x += dayOfYear(y, m, d)
  x -= dayOfYear(1970,1,1)
  return x % 7
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];
}
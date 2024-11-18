let r,s

function setup(){
  createCanvas(500, 500);
  r=2024
  s=1
}

function draw(){
  calendar(r,s)
}

function keyPressed(){
  if(s==1){
    if(keyCode == RIGHT_ARROW){ s+= 1; }
    else if(keyCode == DOWN_ARROW){ r -= 1; }
    else if(keyCode == UP_ARROW){ r += 1; }
  }
  else if(s==12){
    if(keyCode == LEFT_ARROW){ s -= 1; }
    else if(keyCode == DOWN_ARROW){ r -= 1; }
    else if(keyCode == UP_ARROW){ r += 1; }
  }
  else if(r==1){
    if(keyCode == LEFT_ARROW){ s -= 1; }
    else if(keyCode == RIGHT_ARROW){ s+= 1; }
    else if(keyCode == UP_ARROW){ r += 1; }
  }
  else{
    if(keyCode == LEFT_ARROW){ s -= 1; }
    else if(keyCode == RIGHT_ARROW){ s+= 1; }
    else if(keyCode == DOWN_ARROW){ r -= 1; }
    else if(keyCode == UP_ARROW){ r += 1; }
  }
}

function calendar(y, m){
  fill(255)
  rect(50,0,350,50)
  fill(0)
  text(m+"月",210,30)
  text(y+"年",100,20)
  for(let b = 0; b < 7; b++){
   for(let c = 0; c < 6; c++){
    graph(b,c) 
   }
  }
  for(let d=1;d<=daysInMonth(y,m);d++){
   let dow = dayOfWeek(y,m,d);
   fill(0)
   text(d,55+dow*50,90+Week(y,m,d)*50)
   text(dayOfWeekAsString(dow),70+dow*50,67)
   Holiday(y,m,d)
  }
}

function graph(b,c){
    if(1<=b && b<=5){
     fill(255)
     rect(50+b*50,50,50,25)
     rect(50+b*50, 75+c*50, 50)
    }
    else if(b == 0){
     fill(255,100,100)
     rect(50,50,50,25)
     fill(255,200,200)
     rect(50+b*50, 75+c*50, 50)
    }
    else if(b == 6){
     fill(100,100,255)
     rect(350,50,50,25)
     fill(200,200,255)
     rect(50+b*50, 75+c*50, 50)
    }
   }

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  for(let y = 1000; y <= 3000; y++){
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
  for(let j=1;j<y;j++){
   for(let i = 1; i <=12; i++){
    count += daysInMonth(j,i);
   }
  }
  for(let i=1;i<m;i++){
    count += daysInMonth(y,i)
  }
  return count +d
}

function dayOfWeek(y, m, d){
  let x = 1
  x += dayOfYear(y, m, d)
  x -= dayOfYear(1,1,1)
  return x % 7
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];
}

function Week(y,m,d){
  let p = 0
  let dow = dayOfWeek(y,m,1)
  p = d+dow-1
  return Math.floor(p/7)
}

function Holiday(y,m,d){
  let dow = dayOfWeek(y,m,d)
  if(y<2000 && m==1 && d==15){
    Holidays(y,m,d,1)
  }
  else if(m==1 && d==1){
    Holidays(y,m,d,0)
  }
  else if(y>=2000 && m==1 && dow==1){
    if((d-14)<=0 && Week(y,m,d)==2){
      Holidays(y,m,d,1)
    }
    else if((d-7)>0 && Week(y,m,d)==1){
     Holidays(y,m,d,1)
    }
  }
  else if(m==2 && d==11){
    Holidays(y,m,d,2)
  }
  else if(m==2 && d==23){
    Holidays(y,m,d,3)
  }
  else if(m==0 && d==0){
    Holidays(y,m,d,4)
  } 
  else if(m==4 && d==29){
    Holidays(y,m,d,5)
  }
  else if(m==5 && d==3){
    Holidays(y,m,d,6)
    GW(y,m,d)
  }
  else if(m==5 && d==4){
    Holidays(y,m,d,7)
  }
  else if(m==5 && d==5){
    Holidays(y,m,d,8)
  }
  else if(y==2020 && m==7 && d==23){
    Holidays(y,m,d,9)
  }
  else if(y==2021 && m==7 && d==22){
    Holidays(y,m,d,9)
  }
  else if(m==7 && dow==1){
    if((d-21)<=0 && Week(y,m,d)==3){
      Holidays(y,m,d,9)
    }
    else if((d-14)>0 && Week(y,m,d)==2){
     Holidays(y,m,d,9)
    }
  }
  else if(y==2020 && m==8 && d==10){
    Holidays(y,m,d,10)
  }
  else if(y==2021 && m==8 && d==8){
    Holidays(y,m,d,10)
  }
  else if(m==8 && d==11){
    Holidays(y,m,d,10)
  }
  else if(m==9 && dow==1){
    if((d-21)<=0 && Week(y,m,d)==3){
      Holidays(y,m,d,11)
    }
    else if((d-14)>0 && Week(y,m,d)==2){
     Holidays(y,m,d,11)
    }
  }
  else if(m==13 && d==32){
    Holidays(y,m,d,12)
  }
  else if(y==2020 && m==7 && d==24){
    Holidays(y,m,d,13)
  }
  else if(y==2021 && m==7 && d==23){
    Holidays(y,m,d,13)
  }
  else if(m==10 && dow==1){
    if((d-14)<=0 && Week(y,m,d)==2){
      Holidays(y,m,d,13)
    }
    else if((d-7)>0 && Week(y,m,d)==1){
     Holidays(y,m,d,13)
    }
  }
  else if(m==11 && d==3){
    Holidays(y,m,d,14)
  }
  else if(m==11 && d==23){
    Holidays(y,m,d,15)
  }
}

function Holidays(y,m,d,n){
  let dow = dayOfWeek(y,m,d)
  if(dow==0){
   Trade(y,m,d,n)
  }
    fill(255,200,200)
    rect(50+50*dow,75+50*Week(y,m,d),50)
    fill(0)
    text(d,55+dow*50,90+50*Week(y,m,d))
    fill(255,100,100)
    textSize(7)
    text(Name(n),55+dow*50,100+50*Week(y,m,d))
    textSize(12)
}

function Name(n){
  const e =["元日","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日","振替休日"]
  return e[n]
}

function Trade(y,m,d){
  let dow =dayOfWeek(y,m,d)
  if(dow==0){
    dow = dow+1
    fill(255,200,200)
    rect(50+50*dow,75+50*Week(y,m,d),50)
    fill(0)
    text(d+1,55+dow*50,90+50*Week(y,m,d))
    fill(255,100,100)
    textSize(7)
    text(Name(16),55+dow*50,100+50*Week(y,m,d))
    textSize(12)
  }
}

function GW(y,m,d){
  let dow = dayOfWeek(y,m,d)
  if(dow==0){
    dow = dow+3
    fill(255,200,200)
    rect(50+50*dow,75+50*Week(y,m,d),50)
    fill(0)
    text(d+3,55+dow*50,90+50*Week(y,m,d))
    fill(255,100,100)
    textSize(7)
    text(Name(16),55+dow*50,100+50*Week(y,m,d))
    textSize(12)
  }
}
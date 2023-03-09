function setup() {
  createCanvas(400, 400);
}

function draw() {
  //몸통
  fill(240,240,240);
  translate(width / 2, height / 2);
  rotate(radians(45));
  rect(-100,-100, 200, 200, 0, 200, 200, 200);
  
  //주름
  rotate(radians(275));
  arc(0, 0, 180, 180, 0, PI*1.7);
  rotate(radians(70));
  arc(0, 0, 170, 170, 0, (PI/9)*6);
  rotate(radians(10));
  arc(0, 0, 150, 150, 0, (PI/9)*5);
  
  //입
  fill(220,220,220);
  rotate(radians(0));
  arc(0, 15, 30, 30, 0, PI+1);
  rotate(radians(220));
  arc(-13,9, 30, 30, 0, PI+1);
  //코
  fill(88,72,54);
  ellipse(0,0,25);

  //눈
  rotate(radians(325));
  fill(50,50,50);
  ellipse(50,0,30);
  ellipse(0,50,30);
  fill(255,255,255);
  ellipse(50,10,10);
  ellipse(0,60,10);
}

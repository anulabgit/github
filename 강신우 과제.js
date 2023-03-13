function setup() {
  createCanvas(400, 400);
}

function draw() {
  //몸통
  fill(0,180,0);
  triangle(120,80,280,80,200,210)
  
  //눈
  fill(255,255,255);
  ellipse(140,70,50);
  ellipse(260,70,50);
  fill(50,50,50);
  ellipse(140,70,30);
  ellipse(260,70,30);
  
  //혀
  noFill();
  arc(230,210,60,60,0,PI);
  arc(245,210,30,30,PI+QUARTER_PI,0);
  arc(275,210,30,30,PI,PI+HALF_PI+QUARTER_PI);
}
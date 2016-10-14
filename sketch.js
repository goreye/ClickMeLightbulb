  var a = 0;
  var b = 0;
  
  var x = 200;
  //var y = grading[i]
  var z = 150;
  
function setup() {
  
  var back= color(0, 0, 0);
  createCanvas(1200, 750);
  background(back);
  
}

function draw() {
  //a++;
  //b++; 
  
  //if(a>1200) {
  //  a = a--;
  //} else {
  //  a = a++
  //}
  //if(a<0) {
   // a = a--;
  //} else {
  //  a = a++
  //}
  
  //if(b>750) {
  //  b = b--;
  //} else {
  //  b = b++
  //}
  //if(b<0) {
  //  b = b--;
  //} else {
  //  b = b++
  //}
  
  var baseColour = color(160, 160, 160);
  
  ////Base
  
  //Oval
  fill(baseColour);
  ellipse(600 + a, 580 + b, 75, 30);
  //TopDown1
  fill(baseColour);
  rect(550 + a, 550 + b, 100, 10, 20);
  //TopDown1
  fill(baseColour);
  rect(550 + a, 560 + b, 100, 10, 20);
  //TopDown1
  fill(baseColour);
  rect(550 + a, 570 + b, 100, 10, 20);
  //TopDown1
  fill(baseColour);
  rect(550 + a, 580 + b, 100, 5, 20);
  
  ////Triangles
  
  //int [] grading = new int[34];
  //int [] grading = {10, 30, 40, 50, 60, 60, 60, 60, 75, 80, 80, 90, 90, 100, 100, 100, 100, 110, 120, 130, 140, 150, 160, 160, 170, 180, 180, 180, 190, 190, 190, 200, 225, 230};
  
  if(mouseIsPressed) {
   x = random(0,255)
   y = random(0, 255)
  }
  
  //T1
  fill(x, 10, z);
  triangle(650 + a, 550 + b, 575 + a, 550 + b, 600+ a, 525 + b);
  //T2
  fill(x, 30, z); 
  triangle(650 + a, 550 + b, 610 + a, 470 + b, 600 + a, 525 + b); //this triangle is causing problems
  //T3
  fill(x,40, z);
  triangle(550 + a, 550 + b, 575 + a, 550 + b, 600 + a, 525 + b);
  //T4
  fill(x, 50, z);
  triangle(650 + a, 550 + b, 610 + a, 470 + b, 600 + a, 525 + b);
  //T5
  fill(x, 60, z);
  triangle(650 + a, 550 + b, 610 + a, 470 + b, 650 + a, 500 + b);
  //T6
  fill(x, 60, z);
  triangle(700 + a, 375 + b, 700 + a, 400 + b, 655 + a, 400 + b);
  //T7
  fill(x, 60, z);
  triangle(620 + a, 420 + b, 625 + a, 370 + b, 655 + a, 400 + b);
  //T8
  fill(x, 60, z);
  triangle(605 + a, 550 + b, 575 + a, 550 + b, 600 + a, 525 + b);
  //T9
  fill(x, 75, z);
  triangle(680 + a, 450 + b, 700 + a, 400 + b, 655 + a, 400 + b);
  //T10
  fill(x, 80, z);
  triangle(550 + a, 550 + b, 610 + a, 470 + b, 600 + a, 525 + b);
  //T11
  fill(x, 80, z);
  triangle(620 + a, 420 + b, 665 + a, 475 + b, 655 + a, 400 + b);
  //T12
  fill(x, 90, z);
  triangle(700 + a, 375 + b, 625 + a, 370 + b, 655 + a, 400 + b);
  //T13
  fill(x, 90, z);
  triangle(620 + a, 420 + b, 665 + a, 475 + b, 650 + a, 500 + b);
  //T14
  fill(x, 100, z);
  triangle(550 + a, 550 + b, 610 + a, 470 + b, 550 + a, 500 + b);
  //T15
  fill(x, 100, z);
  triangle(620 + a, 420 + b, 610 + a, 470 + b, 650 + a, 500 + b);
  //T16
  fill(x, 100, z);
  triangle(680 + a, 450 + b, 665 + a, 475 + b, 655 + a, 400 + b);
  //T17
  fill(x, 100, z);
  triangle(700 + a, 375 + b, 625 + a, 370 + b, 685 + a, 340 + b);
  //T18
  fill(x, 110, z);
  triangle(525 + a, 470 + b, 610 + a, 470 + b, 550 + a, 500 + b);
  //T19
  fill(x, 120, z);
  triangle(620 + a, 420 + b, 625 + a, 370 + b, 570 + a, 390 + b);
  //T10
  fill(x, 130, z);
  triangle(525 + a, 470 + b, 610 + a, 470 + b, 565 + a, 450 + b);
  //T21
  fill(x, 140, z);
  triangle(525 + a, 470 + b, 510 + a, 450 + b, 565 + a, 450 + b);
  //T22
  fill(x, 150, z);
  triangle(500 + a, 400 + b, 510 + a, 450 + b, 565 + a, 450 + b);
  //T23
  fill(x, 160, z);
  triangle(620 + a, 420 + b, 610 + a, 470 + b, 565 + a, 450 + b);
  //T24
  fill(x, 160, z);
  triangle(570 + a, 390 + b, 625 + a, 370 + b, 685 + a, 340 + b);
  //T25
  fill(x, 170, z);
  triangle(500 + a, 400 + b, 570 + a, 390 + b, 565 + a, 450 + b);
  //T26
  fill(x, 180, z);
  triangle(620 + a, 420 + b, 570 + a, 390 + b, 565 + a, 450 + b);
  //T27
  fill(x, 180, z);
  triangle(570 + a, 390 + b, 580 + a, 340 + b, 685 + a, 340 + b);
  //T28
  fill(x, 190, z);
  triangle(525 + a, 380 + b, 580 + a, 340 + b, 520 + a, 335 + b);
  //T29
  fill(x, 190, z);
  triangle(525 + a, 380 + b, 500 + a, 400 + b, 520 + a, 335 + b);
  //T30
  fill(x, 190, z);
  triangle(525 + a, 380 + b, 500 + a, 400 + b, 570 + a, 390 + b);
  //T31
  fill(x, 200, z);
  triangle(625 + a, 300 + b, 580 + a, 340 + b, 685 + a, 340 + b);
  //T32
  fill(x, 210, z);
  triangle(625 + a, 300 + b, 575 + a, 300 + b, 520 + a, 335 + b);
  //T33
  fill(x, 220, z);
  triangle(625 + a, 300 + b, 580 + a, 340 + b, 520 + a, 335 + b);
  //T34
  fill(x, 230, z);
  triangle(525 + a, 380 + b, 580 + a, 340 + b, 570 + a, 390 + b);

  
}
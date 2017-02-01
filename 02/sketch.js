var ellipsePosX = new int[height];





function setup() {
  
  size(500,500);
  background(0);
  
  for( int i = 0; i < ellipsePosX.length; i++){
  ellipsePosX[i]=0;
  }
  
}





function draw() {
  
  background(255);
  
   noStroke();
  //rect(0,0,width,height);
  
  
  stroke(0);
  for (var i = 0; i < ellipsePosX.length; i++) {
  fill (mouseX,mouseY,200);
    ellipse(ellipsePosX[i], i * 20, 20, 20);
  }

for(var i = 0; i< ellipsePosX.length; i++){
  
  if (ellipsePosX[i] < width) { 
    
    ellipsePosX[i] += i;}
    else
    { ellipsePosX[i] = 0;}}
}
// var radio;

// function setup() {
//   createCanvas(window.innerWidth, window.innerHeight);
//   fill (255);
//   // radio = createRadio();
//   // radio.option("black");
//   // radio.option("white");
//   // radio.option("gray");
//   // radio.style('width', '60px');
//   // textAlign(CENTER);
//   // fill(255, 0, 0);
// }

// function draw() {
// fill(0);
//   ellipse(mouseX,mouseY,30,30)
//   // var val = radio.value();
//   // background(val);
//   // text(val, width/2, height/2);
// }

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  capture = createCapture(VIDEO);
  // capture.size(window.innerWidth, window.innerHeight);
  //capture.hide();
  
}

function draw() {
  // background(255);
  image(capture, mouseX-11, mouseY-11, 108.0, 72.0);

}
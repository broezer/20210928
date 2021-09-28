
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  var w = width * 2;
  var h = height * 2;
  
  translate(-w/2, 0);
  for (var i=0; i< w; i+=10){
    noFill();
    stroke('purple');
    triangle(0 - ((w/w)*i), h = ((w/w)*i), w/2, 0, w, h - ((h/h/2)*i));
    
    
  }
  
  translate(w/200, 0);
  for (var i=0; i< w; i+=10){
    noFill();
    stroke('brown');
    triangle(0 - ((w/w)*i), h = ((w/w)*i), w/2, 0, w, h - ((h/h/2)*i));

  }
  
  translate(-w/100, 0);
  for (var i=0; i< w; i+=10){
    noFill();
    stroke('orange');
    triangle(0 - ((w/w)*i), h = ((w/w)*i), w/2, 0, w, h - ((h/h/2)*i));

  }
  
  noLoop();
  
  save("20210928.png");
  
}

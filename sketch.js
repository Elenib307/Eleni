
var spark=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

  let numSegments = 10,
  x = [],
  y = [],
  angle = [],
  segLength = 50,
  targetX,
  targetY;

for (let i = 0; i < numSegments; i++) {
  x[i] = 0;
  y[i] = 0;
  angle[i] = 0;
}

function setup() {
  createCanvas(500,500);
  strokeWeight(50);
  stroke(100, 100);

  x[x.length - 1] = width / 2; // Set base x-coordinate
  y[x.length - 1] = height; // Set base y-coordinate
}

function draw() {
  background(120,mouseX,230);

  reachSegment(0, mouseX, mouseY);
  for (let i = 1; i < numSegments; i++) {
    reachSegment(i, targetX, targetY);
  }
  for (let j = x.length - 1; j >= 1; j--) {
    positionSegment(j, j - 1);
  }
  for (let k = 0; k < x.length; k++) {
    segment(x[k], y[k], angle[k], (k + 1) * 2);
  }
}

function positionSegment(a, b) {
  x[b] = x[a] + cos(angle[a]) * segLength;
  y[b] = y[a] + sin(angle[a]) * segLength;
}

function reachSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  angle[i] = atan2(dy, dx);
  targetX = xin - cos(angle[i]) * segLength;
  targetY = yin - sin(angle[i]) * segLength;
}

function segment(x, y, a, sw) {
  strokeWeight(sw);
  push();
  translate(x, y);
  rotate(a);
  line(10,10,segLength,15);
  pop(249, 87, 49 );

  //circle
  stroke(255,265,135) // an RGB color for the circle's border
  fill(255,130,250,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  fill(243,95,194);
  ellipse(300,100,spark,spark);
  
  rect(50,30,spark,spark);
  stroke(12, 52, 199);
  fill(148, 169, 250);

}
  


function mouseMoved() {
    
  if(spark>= 150) {
    spark=0;
  } else {
    spark=spark + 3; 
  }

  
}

